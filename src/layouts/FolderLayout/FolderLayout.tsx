import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SideBarAnchor } from "../../components/SideBar/SideBar.props";
import { useWindowSize } from "../../hooks/useWindowSize";
import { selectFullScreen } from "../../store/mainStore";
import styles from "./FolderLayout.module.css";

import { ReactComponent as OpenInfoIcon } from "../../assets/svg/icons/open-icon.svg";
import { ReactComponent as CloseInfoIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { ReactComponent as ContentLineIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { ReactComponent as ContentCardIcon } from "../../assets/svg/icons/icons8-Material Rounded-Download.svg";
import { NavBarButton } from "../../components/NavBarButton/NavBarButton";

export const FolderLayout = () => {
  const [anchors, setAnchors] = useState<SideBarAnchor[]>();

  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBarButton
          className={styles.folder}
          icon={OpenInfoIcon}
          action={(): void => {}}
        />
        <NavBarButton
          className={styles.folder}
          icon={OpenInfoIcon}
          action={(): void => {}}
        />
        <NavBarButton
          className={styles.folder}
          icon={OpenInfoIcon}
          action={(): void => {}}
        />
      </div>
      <section className={styles.content}>
        <Outlet context={{ anchors, setAnchors }} />
      </section>
    </div>
  );
};
