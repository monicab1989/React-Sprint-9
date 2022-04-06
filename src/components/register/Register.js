import { useState } from "react";
import HeaderScreen from "../headerScreen/HeaderScreen";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerInput,
  InputUsuario,
  Title,
  BtnRegister,
  Main,
  ErrorForm,
} from "./Register.styled";
import {
  validationEmail,
  validationPassword,
  userKey,
  isLogin,
} from "../../utils/validation";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //Estados para los errores
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");
  const [errorUserExist, setErrorUserExist] = useState("");

  const navigate = useNavigate();

  const validationForm = () => {
    if (userName.length < 3 || userName === "") {
      setErrorUserName("Tiene que tener un mínimo de 3 caracteres");
      return false;
    } else {
      setErrorUserName("");
    }
    if (!email.match(validationEmail)) {
      setErrorEmail("Este email no es válido");
      return false;
    } else {
      setErrorEmail("");
    }
    if (!password.match(validationPassword)) {
      setErrorPassword(
        "Tiene que contener una mayúscula, un número y un caracter especial."
      );
      return false;
    } else {
      setErrorRepeatPassword("");
    }
    if (repeatPassword !== password) {
      setErrorRepeatPassword("Las contraseñas deben coincidir.");
      return false;
    } else {
      setErrorRepeatPassword("");
    }
    return true;
  };

  const goToGames = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const userDataKey = window.localStorage.getItem(userKey);
      const data = userDataKey ? JSON.parse(userDataKey) : [];
      const userExist = data.find((x) => x.email === email);
      if (userExist) {
        setErrorUserExist("Ya estas logueado");
      } else {
        const item = {
          index: data.length + 1,
          email: email,
          password: password,
        };
        const dataUser = [...data, item];
        const dataUserStored = JSON.stringify(dataUser);
        window.localStorage.setItem(userKey, dataUserStored);
        window.localStorage.getItem(isLogin, "true");
        navigate("/games");
      }
    } else {
      console.log("Hay que rellenar todo");
    }
  };

  return (
    <Container>
      <HeaderScreen />
      <Main>
        <div>
          <Title>Sign Up</Title>
        </div>
        <ContainerInput>
          <InputUsuario
            type="text"
            placeholder="Name"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputUsuario
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputUsuario
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputUsuario
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <ErrorForm>
            {errorUserName}
            {errorEmail}
            {errorPassword}
            {errorRepeatPassword}
            {errorUserExist}
          </ErrorForm>
          <BtnRegister type="submit" onClick={goToGames}>
            Crear Cuenta
          </BtnRegister>
        </ContainerInput>
      </Main>
    </Container>
  );
}
