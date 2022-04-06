import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin: 0px;
  font-family: "Lobster", cursive;
  @media (max-width: 48em) {
    font-size: 40px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const InputUsuario = styled.input`
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid black;
  font-size: 18px;
`;

export const ErrorForm = styled.p`
  color: red;
  font-size: 14px;
`;

export const BtnRegister = styled.button`
  background-color: #e35830;
  border: 1px solid #e35830;
  color: white;
  padding: 10px;
  border-radius: 0.3em;
  font-size: 20px;
  width: 300px;
  cursor: pointer;
  margin-top: 40px;
  &:hover {
    background-color: #ea8264;
    border: 1px solid #ea8264;
  }
  @media (max-width: 48em) {
    width: auto;
  }
`;
