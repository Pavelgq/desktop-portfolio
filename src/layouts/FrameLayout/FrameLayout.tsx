import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTitle } from "../../store/mainStore";

import Draggable from "react-draggable";

export const FrameLayout = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const title = useSelector(selectTitle);
  //Возращать Draggable елемент назад, когда выбран fullscreen
  return (
    <Draggable>
      <div
        className={cn(styles.container, {
          [styles.fullScreen]: fullScreen,
        })}
      >
        <div className={styles.hat}>
          <div className={styles.hatMenu}>
            <Link to="/" className={cn(styles.hatButton, styles.close)}></Link>
            <button
              className={cn(styles.hatButton)}
              onClick={() => setFullScreen(!fullScreen)}
            ></button>
          </div>
          <div className={styles.hatHeader}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
        <section
          className={cn(styles.content, {
            [styles.fullContent]: fullScreen,
          })}
        >
          <Outlet />
        </section>
      </div>
    </Draggable>
  );
};
