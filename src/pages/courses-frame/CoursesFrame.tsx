import cn from "classnames";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PortfolioItemView } from "../../components";
import { coursesData } from "../../data/portfolio";
import { PortfolioItemI } from "../../interfaces/portfolio";
import {
  selectFolderInfoBar,
  selectFolderPalletView,
  setFolderCuttentId,
} from "../../store/folderStore";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./CoursesFrame.module.css";

export const CoursesFrame = () => {
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
  );
};
