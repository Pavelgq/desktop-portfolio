import { MenuItem } from "../../components";
import styles from "./FunSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/icons/icons8-plasticine-Folder.svg";
import { ReactComponent as ConsoleIcon } from "../../assets/svg/icons/console.svg";

export const FunSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>
        <MenuItem
          className={styles.item}
          title={"Terminal"}
          path={"/frame/console"}
          Icon={ConsoleIcon}
        />
        <MenuItem
          className={styles.item}
          title={"Mems"}
          path={"frame/folder/mems"}
          Icon={FolderIcon}
        />
      </ul>
    </nav>
  );
};
