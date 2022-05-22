import { MenuItem } from "../../components";
import styles from "./InfoSidebar.module.css";
import { ReactComponent as FolderIcon } from "../../assets/svg/icons/icons8-plasticine-Folder.svg";
import { ReactComponent as PdfIcon } from "../../assets/svg/icons/icons8-plasticine-PDF.svg";
import { ReactComponent as DocumentIcon } from "../../assets/svg/icons/document-icon.svg";

export const InfoSidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>
        {/* <MenuItem
        className={styles.item}
        title={"Nudes"}
        path={"/error"}
        Icon={FolderIcon}
      /> */}
        <MenuItem
          className={styles.item}
          title={"Портфолио"}
          path={"/frame/folder/portfolio"}
          Icon={FolderIcon}
        />
        <MenuItem
          className={styles.item}
          title={"Резюме_Гордеев.pdf"}
          path={"/frame/resume"}
          Icon={PdfIcon}
        />
        <MenuItem
          className={styles.item}
          title={"Readme"}
          path={"/frame/readme"}
          Icon={DocumentIcon}
        />
        <MenuItem
          className={styles.item}
          title={"Курсы"}
          path={"/frame/folder/courses"}
          Icon={FolderIcon}
        />
      </ul>
    </nav>
  );
};
