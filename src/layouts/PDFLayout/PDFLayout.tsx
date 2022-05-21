import { Outlet } from "react-router-dom";
import styles from "./PDFLayout.module.css";
import { ReactComponent as PrintIcon } from "../../assets/svg/icons/icons8-Fluency System Regular-Print.svg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NavBarButton } from "../../components";

/**
 * TODO: Увеличить, уменьшить, скачать, печатать
 * @returns
 */
export const PDFLayout = () => {

  const handleClick = () => {};

  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);

  const handlePrint = () => {
    // navigate("/print", { replace: true });
    window.open("/#/print", "_blank");
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
        <Outlet />
      </section>
    </div>
  );
};
