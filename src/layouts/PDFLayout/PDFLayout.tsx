import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./PDFLayout.module.css";
import { useState } from "react";
/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <button>Скачать</button>
        <button>Печать</button>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
