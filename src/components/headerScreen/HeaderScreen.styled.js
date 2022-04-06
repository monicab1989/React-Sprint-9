import styled from "styled-components";
import Sala from "../../assets/images/sala.jpg";

export const Header = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url(${Sala});
  background-position-y: center;
  background-position-x: center;
  background-size: 150% 100%;
  @media (max-width: 48em) {
    background-size: 200% 100%;
  }
`;
