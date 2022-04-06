import React from "react";
import {
  BtnLogin,
  BtnSignUp,
  ContainerAll,
  ContainerLogin,
  ContainerWelcome,
  Main,
  Title,
} from "./HomeData.styled";
import { useNavigate } from "react-router-dom";
import HeaderScreen from "../headerScreen/HeaderScreen";

export default function HomeData() {
  const navigate = useNavigate();

  return (
    <ContainerAll>
      <HeaderScreen />
      <Main>
        <ContainerWelcome>
          <Title>Videojuegos</Title>
          <Title>Retro</Title>
          <h2>Welcome!</h2>
          <p>
            Sumergete en el pasado, vuelve a la infancia recordando los mejores
            videojuegos. Los cuáles nos hicieron vivir tardes inolvidables, en
            los que nuestra única preocupación era ganar. Pulsando el mando
            obtendrás los detalles de cada juego.
          </p>
        </ContainerWelcome>
        <ContainerLogin>
          <BtnLogin onClick={() => navigate("/login")}>Login</BtnLogin>
          <BtnSignUp onClick={() => navigate("/signUp")}>
            Crear Cuenta
          </BtnSignUp>
        </ContainerLogin>
      </Main>
    </ContainerAll>
  );
}
