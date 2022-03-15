import { MenuItem } from "../../components";
import styles from "./FunSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/folder.svg";

export const FunSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <MenuItem
        className={styles.item}
        title={"Games"}
        path={"/error"}
        Icon={FolderIcon}
      />
      <MenuItem
        className={styles.item}
        title={"Mems"}
        path={"/error"}
        Icon={FolderIcon}
      />
    </nav>
  );
};
