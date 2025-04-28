import loginStyles from "./Login.module.css";
import commonStyles from "../Styles/Common.module.css";
import logo from "../../assets/capys-logo.png";
import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { login as loginService } from "../../services/authService";
import Toast from "../../components/Toast/Toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginService({ email, password });
      login(data); // salva no contexto
      navigate("/home"); // navega para home
    } catch (error) {
      setToastType("error");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <div className={commonStyles.container}>
      <img src={logo} alt="Logo da Capys" className={loginStyles.logo} />
      <div className={commonStyles.formContainer}>
        <h1 className={commonStyles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={commonStyles.form}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      {showToast && (
        <Toast
          type={toastType}
          message={
            toastType === "success"
              ? "Cadastro realizado com sucesso!"
              : "Ops! Algo deu errado"
          }
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Login;
