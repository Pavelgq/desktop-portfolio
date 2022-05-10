import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { selectFullScreen } from "../../store/mainStore";
import styles from "./FolderLayout.module.css";

import { ReactComponent as OpenInfoIcon } from "../../assets/svg/icons/open-panel.svg";
import { ReactComponent as CloseInfoIcon } from "../../assets/svg/icons/close-panel.svg";
import { ReactComponent as ContentLineIcon } from "../../assets/svg/icons/content-line.svg";
import { ReactComponent as ContentCardIcon } from "../../assets/svg/icons/content-cards.svg";
import { NavBarButton } from "../../components/NavBarButton/NavBarButton";
import { FolderSideBar } from "../../components";
import { checkMobile } from "../../utils/dom-utils";
import {
  selectFolderCurrentId,
  selectFolderInfoBar,
  selectFolderPalletView,
  setFolderInfoBarState,
  setFolderPalletView,
} from "../../store/folderStore";
import { PortfolioItemI } from "../../interfaces/portfolio";
import { portfolioData } from "../../data/portfolio";

export const FolderLayout = () => {
  const [windowX] = useWindowSize();
  const fullScreen = useSelector(selectFullScreen);
  const currentId = useSelector(selectFolderCurrentId);
  const infoBar = useSelector(selectFolderInfoBar);
  const palletView = useSelector(selectFolderPalletView);

  const dispatch = useDispatch();

  const handleChangePalletTable = () => {
    dispatch(setFolderPalletView("Table"));
  };
  const handleChangePalletTile = () => dispatch(setFolderPalletView("Tile"));
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBarButton
          className={styles.folder}
          active={palletView === "Table"}
          onClick={handleChangePalletTable}
        >
          <ContentLineIcon />
        </NavBarButton>
        <NavBarButton
          className={styles.folder}
          active={palletView === "Tile"}
          onClick={handleChangePalletTile}
        >
          <ContentCardIcon />
        </NavBarButton>
        <NavBarButton
          className={styles.folder}
          onClick={() => dispatch(setFolderInfoBarState(!infoBar))}
        >
          {!infoBar ? <OpenInfoIcon /> : <CloseInfoIcon />}
        </NavBarButton>
      </div>
      <section className={styles.content}>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>

        {!checkMobile(windowX) && infoBar ? (
          <FolderSideBar
            data={portfolioData.find(
              (item: PortfolioItemI) => item.id === currentId
            )}
          />
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
