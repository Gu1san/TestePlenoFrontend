import Button from "../Button/Button";
import styles from "./Header.module.css";
import logo from "../../assets/capys-logo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onClick?: () => void;
  buttonText?: string;
}

function Header({ onClick, buttonText = "Voltar" }: HeaderProps) {
  const navigate = useNavigate();

  function handleBack() {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  }

  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo da Capys" className={styles.logo} />
      <Button onClick={handleBack} type="button" variant="tertiary">
        {buttonText}
      </Button>
    </div>
  );
}

export default Header;
