import styles from "./Login.module.css";
import logo from "../../assets/capys-logo.png";
import { useState } from "react";
import Input from "../../components/Input/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo da Capys" className={styles.logo} />
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <Input
            label="Email"
            type="text"
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

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
