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
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export const Nav = styled.div`
  justify-content: center;
  text-align: center;
  border: 1px solid gainsboro;
  padding: 10px;
`;

export const ContainerBackground = styled.div`
  background-image: url(${Fondo});
  padding-bottom: 60px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px 150px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0px 60px;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0px 40px;
  }
`;
export const ContainerCard = styled(Card)`
  width: 290px;
  height: 360px;
  align-items: center;
  justify-content: center;
  margin: 40px 10px 0px 10px;
  box-shadow: 8px 5px 9px gainsboro;
`;

export const Parrafo = styled.p`
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  margin: 20px 0px 0px 0px;
  text-align: center;
`;
export const ContainerMando = styled.div`
  margin-top: 10px;
`;

export const BtnMando = styled.button`
  background-color: white;
  border: 1px solid white;
`;
