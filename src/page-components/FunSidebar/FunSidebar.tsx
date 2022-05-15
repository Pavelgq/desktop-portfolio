import { MenuItem } from "../../components";
import styles from "./FunSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/icons/icons8-plasticine-Folder.svg";
import { ReactComponent as StormtrooperIcon } from "../../assets/svg/icons/icons8-plasticine-Stormtrooper.svg";

export const FunSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>
        <MenuItem
          className={styles.item}
          title={"Games"}
          path={"/frame"}
          Icon={StormtrooperIcon}
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
