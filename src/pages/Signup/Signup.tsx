import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupStyles from "./Signup.module.css";
import commonStyles from "../Styles/Common.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Toast from "../../components/Toast/Toast";
import Header from "../../components/Header/Header";
import { useAuth } from "../../contexts/AuthContext";
import { signup as signupService } from "../../services/authService";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signupService({
        name,
        email,
        password,
        bio,
        contact,
        role,
      });
      login(data); // salva no contexto
      setToastType("success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setToastType("error");
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      console.error("Erro ao cadastrar", error);
    }
    setShowToast(true);
  };

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    bio.trim() !== "" &&
    contact.trim() !== "" &&
    role.trim() !== "" &&
    password === confirmPassword;

  return (
    <div className={commonStyles.container}>
      <div className={signupStyles.headerContainer}>
        <Header />
      </div>
      <div className={commonStyles.formContainer}>
        <h1 className={commonStyles.title}>Crie sua conta</h1>
        <h2 className={signupStyles.subtitle}>Rápido e grátis, vamos nessa</h2>
        <form className={commonStyles.form} onSubmit={handleRegister}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="text"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirmar senha"
            type="text"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password !== confirmPassword && confirmPassword && (
            <p className={signupStyles.errorMessage}>
              As senhas não coincidem.
            </p>
          )}
          <Input
            label="Bio"
            type="text"
            placeholder="Fale um pouco sobre você"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Digite seu contato"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <Input
            label="Selecionar Cargo"
            type="select"
            placeholder="Selecione um cargo"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={[
              { label: "Desenvolvedor Front-end", value: "front-end" },
              { label: "Desenvolvedor Back-end", value: "back-end" },
              { label: "Desenvolvedor Fullstack", value: "fullstack" },
            ]}
          />
          <Button type="submit" disabled={!isFormValid}>
            Cadastrar
          </Button>
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
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Signup;
