import { Link, Outlet, useNavigate } from "react-router-dom";
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
import { NavBarButton } from "../../components";

/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {
  const navigate = useNavigate();
  const [anchors, setAnchors] = useState<PdfSideBarAnchor[]>();

  const handleClick = () => {};

  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);

  const handlePrint = () => {
    // navigate("/print", { replace: true });
    window.open("/print", "_blank");
  };
  const handleDownload = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBarButton className={styles.pdfButton}>
          <DownloadIcon />
        </NavBarButton>
        <NavBarButton className={styles.pdfButton} onClick={handlePrint}>
          <PrintIcon />
        </NavBarButton>
      </div>
      <section className={styles.content}>
        {!checkMobile(windowX) ? <PdfSideBar anchors={anchors} /> : <></>}
        <Outlet context={{ anchors, setAnchors }} />
      </section>
    </div>
  );
};
//TODO: Outlet возвращает объект с якорями или ничего + функцию для создания страницы печати или скачивания pdf
