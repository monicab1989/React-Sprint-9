import styled from "styled-components";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fondo from "../../assets/images/fondo.jpg";

export const ContainerLogout = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px 10px 0px 0px;
`;

export const BtnLogout = styled.button`
  background-color: white;
  border: 1px solid white;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin: 20px;
  font-family: "Lobster", cursive;
  color: #251440;
`;

export const Nav = styled.div`
  justify-content: center;
  text-align: center;
  border: 1px solid gainsboro;
  padding: 10px;
`;

export const ContainerBackground = styled.div`
  background-image: url(${Fondo});
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerCard = styled(Card)`
  width: auto;
  height: auto;
  margin: 20px 220px;
  box-shadow: 8px 5px 9px gainsboro;
  @media (max-width: 1100px) {
    margin: 20px 80px;
  }
`;

export const ContainerNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleNew = styled.h3`
  font-family: "Lobster", cursive;
  margin-bottom: 15px;
  font-size: 22px;
`;

export const ContainerParrafo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
