import { useState, useEffect } from "react";
import {
  ContainerTitle,
  Title,
  Main,
  Nav,
  ContainerCard,
  ContainerLogout,
  BtnLogout,
  ContainerBackground,
  TitleNew,
  ContainerNews,
  ContainerParrafo,
} from "./CurrentNews.styled";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { isLogin } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpinnerLoad from "../../utils/Spinner";

export default function VideoGames() {
  const [currentNews, setCurrentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const value = window.localStorage.getItem(isLogin);
    if (value !== "true") {
      navigate("/");
    } else {
      axios.get(`http://mytraini.w24.wh-2.com/news`).then((res) => {
        setCurrentNews(res.data);
        setLoading(false);
      });
    }
  }, []);

  const exitSession = () => {
    window.localStorage.removeItem(isLogin);
    navigate("/");
  };

  return (
    <div>
      <header>
        <ContainerLogout>
          <BtnLogout type="button" onClick={exitSession}>
            Logout
          </BtnLogout>
        </ContainerLogout>
        <ContainerTitle>
          <Title>Videojuegos</Title>
        </ContainerTitle>
        <Nav>
          <NavLink to="/games" className="linkNav">
            Videojuegos
          </NavLink>
          <NavLink to="/news" className="linkNav">
            News
          </NavLink>
        </Nav>
      </header>
      {loading ? (
        <div className="containerLoad">
          <SpinnerLoad />
        </div>
      ) : (
        <ContainerBackground>
          <Main>
            {currentNews.map((item) => {
              return (
                <ContainerCard key={item.id}>
                  <ContainerNews>
                    <img src={item.image} alt="" className="imgNews" />
                    <ContainerParrafo>
                      <TitleNew>{item.title}</TitleNew>
                      <p>{item.description}</p>
                    </ContainerParrafo>
                  </ContainerNews>
                </ContainerCard>
              );
            })}
          </Main>
        </ContainerBackground>
      )}
    </div>
  );
}
