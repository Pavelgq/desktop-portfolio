import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { PdfSideBarAnchor } from "../../components/PdfSideBar/PdfSideBar.props";
import { useWindowSize } from "../../hooks/useWindowSize";
import { selectFullScreen } from "../../store/mainStore";
import styles from "./FolderLayout.module.css";

import { ReactComponent as OpenInfoIcon } from "../../assets/svg/icons/open-panel.svg";
import { ReactComponent as CloseInfoIcon } from "../../assets/svg/icons/close-panel.svg";
import { ReactComponent as ContentLineIcon } from "../../assets/svg/icons/content-line.svg";
import { ReactComponent as ContentCardIcon } from "../../assets/svg/icons/content-cards.svg";
import { NavBarButton } from "../../components/NavBarButton/NavBarButton";
import cn from "classnames";
import { FolderSideBar } from "../../components";
import { checkMobile } from "../../utils/dom-utils";

export const FolderLayout = () => {
  const [infoBar, setInfoBar] = useState(false);
  const [palletView, setPalletView] = useState(false);

  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBarButton
          className={styles.folder}
          active={palletView}
          onClick={() => setPalletView(!palletView)}
        >
          <ContentLineIcon />
        </NavBarButton>
        <NavBarButton
          className={styles.folder}
          active={!palletView}
          onClick={() => setPalletView(!palletView)}
        >
          <ContentCardIcon />
        </NavBarButton>
        <NavBarButton
          className={styles.folder}
          onClick={() => setInfoBar(!infoBar)}
        >
          {!infoBar ? <OpenInfoIcon /> : <CloseInfoIcon />}
        </NavBarButton>
      </div>
      <section className={styles.content}>
        <Outlet context={{ infoBar, palletView }} />
        {!checkMobile(windowX) && infoBar ? <FolderSideBar /> : <></>}
      </section>
    </div>
  );
};
