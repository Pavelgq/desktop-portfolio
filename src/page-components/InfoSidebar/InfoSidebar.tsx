import { MenuItem } from "../../components";
import styles from "./InfoSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/icons/icons8-plasticine-Folder.svg";
import { ReactComponent as PdfIcon } from "../../assets/svg/icons/icons8-plasticine-PDF.svg";

export const InfoSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      {/* <MenuItem
        className={styles.item}
        title={"Nudes"}
        path={"/error"}
        Icon={FolderIcon}
      /> */}
      <MenuItem
        className={styles.item}
        title={"Portfolio"}
        path={"/frame/welcome"}
        Icon={FolderIcon}
      />
      <MenuItem
        className={styles.item}
        title={"Resume"}
        path={"/frame/resume"}
        Icon={PdfIcon}
      />
      <MenuItem
        className={styles.item}
        title={"Todo"}
        path={"/error"}
        Icon={FolderIcon}
      />
    </nav>
  );
};
