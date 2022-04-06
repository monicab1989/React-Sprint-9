import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderScreen from "../headerScreen/HeaderScreen";
import {
  InputUsuario,
  Main,
  Container,
  ContainerInput,
  Title,
  BtnLogin,
  ErrorForm,
  BtnRegister,
} from "./LoginPerson.styled";
import {
  validationEmail,
  validationPassword,
  userKey,
  isLogin,
} from "../../utils/validation";

export default function LoginPerson() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Estados de errores
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.match(validationEmail)) {
      setErrorEmail("El email no es correcto");
      return false;
    } else {
      setErrorEmail("");
    }
    if (!password.match(validationPassword)) {
      setErrorPassword("La contraseña no es correcta");
      return false;
    } else {
      setErrorPassword("");
    }
    return true;
  };

  const goToGames = () => {
    if (validateForm()) {
      const dataKey = window.localStorage.getItem(userKey);
      const dataUser = dataKey ? JSON.parse(dataKey) : [];
      const userExist = dataUser.find(
        (x) => x.email === email && x.password === password
      );
      if (userExist) {
        window.localStorage.setItem(isLogin, "true");
        navigate("/games");
      } else {
        setErrorRegister("Tienes que registrarte");
      }
    } else {
      setErrorRegister("Hay que rellenar bien los campos");
    }
  };

  return (
    <Container>
      <HeaderScreen />
      <Main>
        <div>
          <Title>Login</Title>
        </div>
        <ContainerInput>
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
          <ErrorForm>
            {errorEmail}
            {errorPassword}
            {errorRegister}
          </ErrorForm>
          <BtnLogin type="submit" onClick={goToGames}>
            Login
          </BtnLogin>
          <BtnRegister type="button" onClick={() => navigate("/signUp")}>
            Crear Cuenta
          </BtnRegister>
        </ContainerInput>
      </Main>
    </Container>
  );
}
