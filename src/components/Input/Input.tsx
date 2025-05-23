import React, { useState } from "react";
import styles from "./Input.module.css";
import EyeIcon from "../../assets/eye-solid.svg?react";
import EyeSlashIcon from "../../assets/eye-slash-solid.svg?react";

interface InputProps {
  label: string;
  type: "text" | "email" | "password" | "select";
  placeholder?: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  required?: boolean;
  options?: { value: string; label: string }[]; // No caso do tipo select
}

function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = true,
  options = [],
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      {(type === "text" || type === "email") && (
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
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
            required
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
        <select
          className={styles.select}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option disabled value="">
            Selecione uma opção
          </option>
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
