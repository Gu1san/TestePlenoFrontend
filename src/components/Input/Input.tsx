import React, { useState } from "react";
import styles from "./Input.module.css";
import EyeIcon from "../../assets/eye-solid.svg?react";
import EyeSlashIcon from "../../assets/eye-slash-solid.svg?react";

interface InputProps {
  label: string;
  type: "text" | "password" | "select";
  placeholder?: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  options?: { value: string; label: string }[]; // No caso do tipo select
}

function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  options = [],
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      {type === "text" && (
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {type === "password" && (
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className={styles.toggleButton} />
            ) : (
              <EyeIcon className={styles.toggleButton} />
            )}
          </button>
        </div>
      )}

      {type === "select" && (
        <select className={styles.select} value={value} onChange={onChange}>
          <option value="">Selecione uma opção</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Input;
