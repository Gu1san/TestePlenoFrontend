import { useState, useEffect } from "react";
import styles from "./Toast.module.css";

function Toast({
  message,
  image,
  duration = 3000,
  onClose,
  type,
}: {
  message: string;
  image: React.ReactNode;
  duration?: number;
  onClose?: () => void;
  type: "success" | "error";
}) {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Decremetar a barra de progresso
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, duration / 100); // Ajustar para o tempo total da barra de progresso

    // Fechar o toast após o tempo especificado
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(); // Callback quando o toast desaparecer
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  if (!isVisible) return null; // Não renderiza o toast se não for visível

  return (
    <div className={styles.toast}>
      <div className={`${styles.toastImage} ${styles[type]}`}>{image}</div>
      <div className={styles.toastContent}>
        <p className={styles.toastMessage}>{message}</p>
        <button
          className={styles.closeButton}
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
        >
          x
        </button>
      </div>
      <div
        className={`${styles.toastProgress} ${styles[type]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default Toast;
