import Button from "../Button/Button";
import styles from "./Header.module.css";
import logo from "../../assets/capys-logo.png";

interface HeaderProps {
  onBack?: () => void;
}

function Header({ onBack }: HeaderProps) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo da Capys" className={styles.logo} />
      <Button onClick={onBack} type="button" variant="tertiary">
        Voltar
      </Button>
    </div>
  );
}

export default Header;
