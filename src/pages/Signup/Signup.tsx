import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupStyles from "./Signup.module.css";
import commonStyles from "../Styles/Common.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Toast from "../../components/Toast/Toast";
import CheckIcon from "../../assets/check-solid.svg?react";
import ExclamationIcon from "../../assets/exclamation-triangle-solid.svg?react";
import Header from "../../components/Header/Header";

function Signup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("");

  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o formulário de recarregar a página

    // TODO: Aqui você poderá adicionar a lógica de envio dos dados para uma API

    setShowToast(true);

    // Simular sucesso e redirecionar depois de um tempo
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className={commonStyles.container}>
      <div className={signupStyles.headerContainer}>
        <Header />
      </div>
      <div className={commonStyles.formContainer}>
        <h1 className={commonStyles.title}>Crie sua conta</h1>
        <form className={commonStyles.form} onSubmit={handleRegister}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Input
            label="Confirmar senha"
            type="text"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
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
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />
          <Input
            label="Selecionar Cargo"
            type="select"
            placeholder="Selecione um cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            options={[
              { label: "Desenvolvedor Front-end", value: "front-end" },
              { label: "Desenvolvedor Back-end", value: "back-end" },
              { label: "Desenvolvedor Fullstack", value: "fullstack" },
            ]}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>

      {showToast && (
        <Toast
          type="success"
          message="Cadastro realizado com sucesso!"
          image={<CheckIcon />}
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Signup;
