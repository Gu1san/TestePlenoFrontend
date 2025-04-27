import { useState } from "react";
import signupStyles from "./Signup.module.css";
import commonStyles from "../Styles/Common.module.css";
import logo from "../../assets/capys-logo.png";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Toast from "../../components/Toast/Toast";
import CheckIcon from "../../assets/check-solid.svg?react";
import ExclamationIcon from "../../assets/exclamation-triangle-solid.svg?react";

function Signup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("");

  const [showToast, setShowToast] = useState(false);

  const handleRegister = () => {
    setShowToast(true);
  };

  return (
    <div className={commonStyles.container}>
      <div className={signupStyles.header}>
        <img src={logo} alt="Logo da Capys" className={signupStyles.logo} />
        <Button type="button" variant="tertiary">
          Voltar
        </Button>
      </div>
      <div className={commonStyles.formContainer}>
        <h1 className={commonStyles.title}>Crie sua conta</h1>
        <form className={commonStyles.form}>
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
          <Button type="submit" onClick={handleRegister}>
            Cadastrar
          </Button>
        </form>
      </div>
      {showToast && (
        <Toast
          type="error"
          message="Cadastro realizado com sucesso!"
          image={<CheckIcon />}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Signup;
