import { Outlet } from "react-router-dom";
import { MenuItem } from "../../components";
import styles from "./DesktopLayout.module.css";

import { ReactComponent as FolderIcon } from "./folder.svg";

export const DesktopLayout = () => {
  return (
    <div className={styles.container}>
      <MenuItem title={"Nudes"} path={"/error"} Icon={FolderIcon} />
      <span>LLL</span>
      <Outlet />
    </div>
  );
};
