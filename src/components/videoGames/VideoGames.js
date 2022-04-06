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
  Parrafo,
  BtnMando,
  ContainerMando,
} from "./VideoGames.styled";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { isLogin } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mando from "../../assets/images/mando.png";
import SpinnerLoad from "../../utils/Spinner";

export default function VideoGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const value = window.localStorage.getItem(isLogin);
    if (value !== "true") {
      navigate("/");
    } else {
      axios.get(`http://mytraini.w24.wh-2.com/games`).then((res) => {
        setGames(res.data);
        setLoading(false);
      });
    }
  }, []);

  const exitSession = () => {
    window.localStorage.removeItem(isLogin);
    navigate("/");
  };

  const goToDetail = (value) => {
    const detailGame = games.filter((x) => x.id === value.id);
    const params = { ...detailGame[0] };
    navigate(`/detailGame/${params.id}`, { state: { id: params } });
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
            {games.map((item) => {
              return (
                <ContainerCard key={item.id}>
                  <img src={item.smallImage} alt="" className="imgGame" />
                  <Parrafo>{item.name}</Parrafo>
                  <ContainerMando>
                    <BtnMando type="button" onClick={(x) => goToDetail(item)}>
                      <img src={Mando} alt="" className="imgMando" />
                    </BtnMando>
                  </ContainerMando>
                </ContainerCard>
              );
            })}
          </Main>
        </ContainerBackground>
      )}
    </div>
  );
}
