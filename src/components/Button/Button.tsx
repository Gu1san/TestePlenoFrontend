import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
