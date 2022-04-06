import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
`;

export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 100px;
  margin: 0px;
  font-family: "Lobster", cursive;
  @media (max-width: 48em) {
    font-size: 60px;
  }
`;

export const ContainerWelcome = styled.div`
  text-align: center;
  margin: 20px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

export const BtnLogin = styled.button`
  background-color: #30bbe3;
  border: 1px solid #30bbe3;
  color: white;
  padding: 10px;
  border-radius: 0.3em;
  font-size: 20px;
  margin-right: 15px;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    background-color: #97ddf1;
    border: 1px solid #97ddf1;
  }
  @media (max-width: 48em) {
    margin: 0px 20px 10px 20px;
  }
`;

export const BtnSignUp = styled.button`
  background-color: #e35830;
  border: 1px solid #e35830;
  color: white;
  padding: 10px;
  border-radius: 0.3em;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #ea8264;
    border: 1px solid #ea8264;
  }
  @media (max-width: 48em) {
    margin: 0px 20px;
  }
`;
