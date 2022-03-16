import styles from "./WelcomeFrame.module.css";

export const WelcomeFrame = () => {
  return (
    <div className={styles.container}>
      <h3>Приветствую!</h3>
      <span>Меня зовут, </span>
      <span>Гордеев Павел</span>
    </div>
  );
};
