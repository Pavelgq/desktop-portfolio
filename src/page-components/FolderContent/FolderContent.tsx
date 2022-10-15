import cn from "classnames";
import { useEffect, useState, TouchEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FolderSideBar,
  PortfolioItemView,
  ScrollObserver,
} from "../../components";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  selectFolderCurrentId,
  selectFolderInfoBar,
  selectFolderPalletView,
  selectFolderScrollPosition,
  selectSidebarScrollPosition,
  setFolderCuttentId,
  setFolderInfoBarState,
  setFolderScrollPosition,
  setSidebarScrollPosition,
} from "../../store/folderStore";
import { setTargetWindowTitle } from "../../store/mainStore";
import { checkMobile } from "../../utils/dom-utils";
import { FolderContentProps } from "./FolderContent.props";
import styles from "./FolderContent.module.css";

export const FolderContent = ({ title, data }: FolderContentProps) => {
  const [windowX] = useWindowSize();
  const currentId = useSelector(selectFolderCurrentId);
  const infoBar = useSelector(selectFolderInfoBar);
  const palletView = useSelector(selectFolderPalletView);
  const currentItemsScrollPosition = useSelector(selectFolderScrollPosition);
  const currentSideBarScrollPosition = useSelector(selectSidebarScrollPosition);
  const [touchPosition, setTouchPosition] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (checkMobile(windowX)) {
      dispatch(setFolderInfoBarState(true));
    }
    dispatch(setTargetWindowTitle(title));
  }, []);

  const handleSelect = (id: number) => {
    dispatch(setFolderCuttentId(id));
    !infoBar && dispatch(setFolderInfoBarState(true));
  };

  const close = () => {
    dispatch(setFolderInfoBarState(false));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (!touchDown) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff < -6) {
      close();
    }

    setTouchPosition(0);
  };

  return (
    <>
      <ScrollObserver
        className={cn(styles.itemList, {
          [styles.table]: palletView === "Table",
          [styles.tile]: palletView === "Tile",
        })}
        currentScroll={currentItemsScrollPosition}
        setCurrentScroll={setFolderScrollPosition}
        onClick={() => handleSelect(0)}
      >
        {data.map((item, i) => (
          <PortfolioItemView
            key={item.id}
            item={item}
            variant={palletView}
            className={styles.portfolioItem}
            handleClick={handleSelect}
          />
        ))}
      </ScrollObserver>
      <ScrollObserver
        currentScroll={currentSideBarScrollPosition}
        setCurrentScroll={setSidebarScrollPosition}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={cn(styles.slideContainer, {
          [styles.showContainer]: infoBar,
        })}
      >
        <FolderSideBar
          className={cn({
            [styles.sideBar]: !checkMobile(windowX),
            [styles.sideBarMobile]: checkMobile(windowX),
            [styles.show]: infoBar,
          })}
          data={data.find((item) => item.id === currentId)}
        />
      </ScrollObserver>
    </>
  );
};
