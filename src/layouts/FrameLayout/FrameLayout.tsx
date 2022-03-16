import { Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { useState } from "react";

export const FrameLayout = () => {
  const [title, setTitle] = useState("Без названия");
  return (
    <div className={styles.container}>
      <div className={styles.hat}>
        <div className={styles.hatMenu}>
          <button className={cn(styles.hatButton, styles.close)}></button>
          <button className={cn(styles.hatButton, styles.fullscreen)}></button>
        </div>
        <div className={styles.hatHeader}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
      <section className={styles.content}>
        <Outlet context={{ setTitle }} />
      </section>
    </div>
  );
};
