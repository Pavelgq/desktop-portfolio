import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./PDFLayout.module.css";
import { useState } from "react";
import { ReactComponent as PrintIcon } from "../../assets/svg/icons/icons8-Fluency System Regular-Print.svg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { SideBar } from "../../components/SideBar/SideBar";
import { SideBarAnchor } from "../../components/SideBar/SideBar.props";
/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {
  const [anchors, setAnchors] = useState<SideBarAnchor[]>();
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <button className={styles.pdfButton}>
          <DownloadIcon />
        </button>
        <button className={styles.pdfButton}>
          <PrintIcon />
        </button>
      </div>
      <section className={styles.content}>
        <SideBar anchors={anchors} />
        <Outlet context={{ anchors, setAnchors }} />
      </section>
    </div>
  );
};
//TODO: Outlet возвращает объект с якорями или ничего + функцию для создания страницы печати или скачивания pdf
