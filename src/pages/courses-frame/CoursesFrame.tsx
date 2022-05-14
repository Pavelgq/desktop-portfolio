import cn from "classnames";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FolderSideBar, PortfolioItemView } from "../../components";
import { coursesData, portfolioData } from "../../data/portfolio";
import { useWindowSize } from "../../hooks/useWindowSize";
import { PortfolioItemI } from "../../interfaces/portfolio";
import {
  selectFolderCurrentId,
  selectFolderInfoBar,
  selectFolderPalletView,
  setFolderCuttentId,
} from "../../store/folderStore";
import { setTargetWindowTitle } from "../../store/mainStore";
import { checkMobile } from "../../utils/dom-utils";
import styles from "./CoursesFrame.module.css";

export const CoursesFrame = () => {
   const [windowX] = useWindowSize();
  const currentId = useSelector(selectFolderCurrentId);
  const infoBar = useSelector(selectFolderInfoBar);
  const palletView = useSelector(selectFolderPalletView);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Курсы"));
  }, []);

  const handleSelect = (id: number) => {
    dispatch(setFolderCuttentId(id));
  };

  return (
    <>
    <div
      className={cn(styles.itemList, {
        [styles.table]: palletView === "Table",
        [styles.tile]: palletView === "Tile",
      })}
      onClick={() => handleSelect(0)}
    >
      {coursesData.map((item, i) => (
        <PortfolioItemView
          key={item.id}
          item={item}
          variant={palletView}
          className={styles.portfolioItem}
          handleClick={handleSelect}
        />
      ))}
    </div>
    {!checkMobile(windowX) && infoBar ? (
          <FolderSideBar
            data={coursesData.find(
              (item: PortfolioItemI) => item.id === currentId
            )}
          />
        ) : (
          <></>
        )}
    </>
  );
};
