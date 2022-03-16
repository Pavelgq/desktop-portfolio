import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./WelcomeFrame.module.css";

type ContextType = { setTitle: React.Dispatch<React.SetStateAction<string>> };

export const WelcomeFrame = () => {
  const { setTitle } = useOutletContext<ContextType>();

  useEffect(() => {
    setTitle("Добро пожаловать");
  }, []);

  return (
    <div className={styles.container}>
      <h3>Приветствую!</h3>
      <span>Меня зовут, </span>
      <span>Гордеев Павел</span>
    </div>
  );
};
