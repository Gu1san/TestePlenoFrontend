import loginStyles from "./Login.module.css";
import commonStyles from "../Styles/Common.module.css";
import logo from "../../assets/capys-logo.png";
import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  return (
    <div className={commonStyles.container}>
      <img src={logo} alt="Logo da Capys" className={loginStyles.logo} />
      <div className={commonStyles.formContainer}>
        <h1 className={commonStyles.title}>Login</h1>
        <form className={commonStyles.form}>
          <Input
            label="Email"
            type="email"
            placeholder="Digite aqui seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <div className={loginStyles.signupContainer}>
            <p className={loginStyles.signupTitle}>
              Ainda não possui uma conta?
            </p>
            <Button
              onClick={() => navigate("/signup")}
              variant="secondary"
              type="button"
            >
              Cadastre-se
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
