import { MenuItem } from "../../components";
import styles from "./InfoSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/folder.svg";

export const InfoSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <MenuItem
        className={styles.item}
        title={"Nudes"}
        path={"/error"}
        Icon={FolderIcon}
      />
      <MenuItem
        className={styles.item}
        title={"Portfolio"}
        path={"/error"}
        Icon={FolderIcon}
      />
      <MenuItem
        className={styles.item}
        title={"Resume"}
        path={"/error"}
        Icon={FolderIcon}
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
