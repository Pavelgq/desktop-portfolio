import { MenuItem } from "../../components";
import styles from "./FunSidebar.module.css";
// import { ReactComponent as FolderIcon } from "../../assets/svg/icons/icons8-plasticine-Folder.svg";
import { ReactComponent as GaleryIcon } from "../../assets/svg/icons/icons8-plasticine-PhotoGallery.svg";
import { ReactComponent as ConsoleIcon } from "../../assets/svg/icons/console.svg";
import { ReactComponent as SettingIcon } from "../../assets/svg/icons/icons8-plasticine-Settings.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { checkMobile } from "../../utils/dom-utils";

export const FunSidebar = () => {
  const [windowX] = useWindowSize();
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>
        <MenuItem
          className={styles.item}
          title={"Terminal"}
          path={"/frame/terminal"}
          Icon={ConsoleIcon}
        />
        <MenuItem
          className={styles.item}
          title={"Cats"}
          path={"frame/cats"}
          Icon={GaleryIcon}
        />
        {checkMobile(windowX) && (
          <MenuItem
            className={styles.item}
            title={"Настройки"}
            path={"frame/settings"}
            Icon={SettingIcon}
          />
        )}
      </ul>
    </nav>
  );
};
