import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFullScreen,
  selectTitle,
  toggleFullScreen,
} from "../../store/mainStore";

export const FrameLayout = () => {
  const title = useSelector(selectTitle);
  const fullScreen = useSelector(selectFullScreen);
  const dispatch = useDispatch();

  const handleFullScreen = () => {
    dispatch(toggleFullScreen());
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div onDoubleClick={handleFullScreen} className={styles.hat}>
        <div className={styles.hatMenu}>
          <Link to="/" className={cn(styles.hatButton, styles.close)}></Link>
          <button
            className={cn(styles.hatButton)}
            onClick={handleFullScreen}
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
  );
};
