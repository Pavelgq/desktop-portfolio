import { Link, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from "./PDFLayout.module.css";
import { useState } from "react";
import { ReactComponent as PrintIcon } from "../../assets/svg/icons/icons8-Fluency System Regular-Print.svg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { PdfSideBar } from "../../components/PdfSideBar/PdfSideBar";
import { PdfSideBarAnchor } from "../../components/PdfSideBar/PdfSideBar.props";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";
import { useWindowSize } from "../../hooks/useWindowSize";
import { checkMobile } from "../../utils/dom-utils";

/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {
  const [anchors, setAnchors] = useState<PdfSideBarAnchor[]>();

  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);
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
        {!checkMobile(windowX) ? <PdfSideBar anchors={anchors} /> : <></>}
        <Outlet context={{ anchors, setAnchors }} />
      </section>
    </div>
  );
};
//TODO: Outlet возвращает объект с якорями или ничего + функцию для создания страницы печати или скачивания pdf
