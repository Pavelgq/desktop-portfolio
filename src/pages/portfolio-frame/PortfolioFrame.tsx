import cn from "classnames";
import { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  FolderSideBar,
  PortfolioItem,
  PortfolioItemView,
} from "../../components";
import { portfolioData } from "../../data/portfolio";
import { useWindowSize } from "../../hooks/useWindowSize";
import { PortfolioItemI } from "../../interfaces/portfolio";
import {
  selectFolderCurrentId,
  selectFolderInfoBar,
  selectFolderPalletView,
  setFolderCuttentId,
  setFolderInfoBarState,
} from "../../store/folderStore";
import { setTargetWindowTitle } from "../../store/mainStore";
import { checkMobile } from "../../utils/dom-utils";
import styles from "./PortfolioFrame.module.css";

export const PortfolioFrame = () => {
  const [windowX] = useWindowSize();
  const currentId = useSelector(selectFolderCurrentId);
  const infoBar = useSelector(selectFolderInfoBar);
  const palletView = useSelector(selectFolderPalletView);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkMobile(windowX)) {
      dispatch(setFolderInfoBarState(true))
    }
    dispatch(setTargetWindowTitle("Портфолио"));
  }, []);

  const handleSelect = (id: number) => {
    dispatch(setFolderCuttentId(id));
  };

  return (
    <>

      <div className={cn(styles.itemList, {
        [styles.table]: palletView === "Table",
        [styles.tile]: palletView === "Tile",
      })}>
          {portfolioData.map((item, i) => (
                  <PortfolioItemView
                    key={item.id}
                    item={item}
                    variant={palletView}
                    className={styles.portfolioItem}
                    handleClick={handleSelect}
                  />
                ))}

        </div>
      {infoBar ? (
          <FolderSideBar className={cn({
            [styles.sideBarMobile] : checkMobile(windowX)
          })}
            data={portfolioData.find(
              (item: PortfolioItemI) => item.id === currentId
            )}
          />
        ) : (
         <></>
        )}
    </>
  );
};
