import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./PDFLayout.module.css";
import { useState } from "react";
import { ReactComponent as PrintIcon } from "../../assets/svg/icons/icons8-Fluency System Regular-Print.svg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <button>
          <DownloadIcon />
        </button>
        <button>
          <PrintIcon />
        </button>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
