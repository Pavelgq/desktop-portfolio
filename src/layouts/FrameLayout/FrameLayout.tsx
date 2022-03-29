import React, { MouseEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { useState } from "react";
import { getCoords } from "../../utils/dom-utils";

export const FrameLayout = () => {
  const [title, setTitle] = useState("Без названия");
  const [fullScreen, setFullScreen] = useState(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const coords = getCoords(e.currentTarget);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    console.log("mdown");
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      console.log(e.currentTarget);
      // console.log(e.pageX - e.currentTarget.offsetWidth / 2 + "px");
      e.currentTarget.style.left = e.pageX - shiftX + "px";
      e.currentTarget.style.top = e.pageY - shiftY + "px";
      console.log("mmove");
    };

    document.addEventListener("mousemove", (e: unknown) => {
      handleMouseMove(e as MouseEvent<HTMLDivElement>);
    });
    document.addEventListener("mouseup", (e: unknown) => {
      document.removeEventListener("mousemove", (e: unknown) => {
        console.log("remove mmove");
      });
      document.removeEventListener("mouseup", (e: unknown) => {
        console.log("remove mup");
      });
    });
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
      // onDragStart={(e) => dragStartHandler(e)}
      // onDragLeave={(e) => dragLeaveHandler(e)}
      // onDragEnd={(e) => dragEndHandler(e)}
      // onDragOver={(e) => dragOverHandler(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      // onDrop={(e) => dropHandler(e)}
      // draggable={true}
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
      <section className={styles.content}>
        <Outlet context={{ setTitle }} />
      </section>
    </div>
  );
};
