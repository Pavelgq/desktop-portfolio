import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./WelcomeFrame.module.css";

export const WelcomeFrame = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Добро пожаловать"));
  }, []);

  return (
    <div className={styles.container}>
      <h3>Приветствую!</h3>
      <span>Меня зовут, </span>
      <span>Гордеев Павел</span>
    </div>
  );
};
