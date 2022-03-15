import { Outlet } from "react-router-dom";
import { Footer, FunSidebar, InfoSidebar } from "../../page-components";
import styles from "./DesktopLayout.module.css";

export const DesktopLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <InfoSidebar />
        <Outlet />
        <FunSidebar />
      </div>

      <Footer />
    </div>
  );
};
