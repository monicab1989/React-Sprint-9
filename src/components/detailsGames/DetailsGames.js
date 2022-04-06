import { useState, useEffect } from "react";
import {
  BtnBack,
  ContainCard,
  ContainerBtnBack,
  ContainerCard,
  ContainerImg,
  ContainerParrafo,
  ContainerParrafo2,
  ContainerTitle,
  Title,
} from "./DetailsGames.styled";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailsGames() {
  const [game, setGame] = useState({});

  const location = useLocation();
  const detailsGame = location.state.id;

  const navigate = useNavigate();

  useEffect(() => {
    setGame(detailsGame);
  }, []);

  return (
    <ContainerCard>
      <ContainCard key={game.id}>
        <ContainerImg>
          <img src={game.smallImage} alt="" className="imgDetailGame" />
        </ContainerImg>
        <ContainerTitle>
          <Title>{game.name}</Title>
          <p>{game.description}</p>
        </ContainerTitle>
        <ContainerParrafo>
          <p>Year: {game.year}</p>
          <p>{game.genre}</p>
        </ContainerParrafo>
        <ContainerParrafo2>
          <p>Payers: {game.numberOfPlayers}</p>
          <p>{game.platform}</p>
        </ContainerParrafo2>
        <ContainerBtnBack>
          <BtnBack type="button" onClick={() => navigate("/games")}>
            Back
          </BtnBack>
        </ContainerBtnBack>
      </ContainCard>
    </ContainerCard>
  );
}
