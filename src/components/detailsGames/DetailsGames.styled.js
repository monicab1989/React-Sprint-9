import styled from "styled-components";
import Fondo from "../../assets/images/fondo.jpg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Fondo});
  height: 100vh;
  margin: 0px;
`;
export const ContainerParrafo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ContainerParrafo2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const ContainCard = styled(Card)`
  width: 500px;
  box-shadow: 10px 10px 10px gainsboro;
  height: 650px;
  margin-top: 70px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 0px 30px;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Title = styled.h3`
  font-family: "Lobster", cursive;
  margin-bottom: 15px;
`;

export const Parrafo = styled.p`
  margin: 0px !important;
`;

export const ContainerBtnBack = styled.div`
  margin-top: -20px;
`;

export const BtnBack = styled.button`
  background-color: white;
  border: 1px;
  font-family: "Lobster", cursive;
`;
