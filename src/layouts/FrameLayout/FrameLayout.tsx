import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFullScreen,
  selectTitle,
  setFullScreen,
  toggleFullScreen,
} from "../../store/mainStore";
import { ReactComponent as CloseIcon } from "../../assets/svg/icons/close.svg";
import { ReactComponent as FullIcon } from "../../assets/svg/icons/fullScreen.svg";
import { ReactComponent as MainIcon } from "../../assets/svg/icons/icons8-main.svg";
import { HTag } from "../../components";
import {
  CustomDragLayer,
  DraggableWrapper,
} from "../../components/DraggableWrapper/DraggableWrapper";
import { useWindowSize } from "../../hooks/useWindowSize";
import { checkMobile } from "../../utils/dom-utils";

interface ContextI {
  draggableItem: {
    top: number;
    left: number;
  };
}

export const FrameLayout = () => {
  console.log("frame");
  const [windowX] = useWindowSize();
  const { draggableItem } = useOutletContext<ContextI>();
  const title = useSelector(selectTitle);
  const fullScreen = useSelector(selectFullScreen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("windowX", windowX, checkMobile(windowX), fullScreen);
    if (checkMobile(windowX) && !fullScreen) {
      dispatch(setFullScreen(true));
    } else {
      if (!checkMobile(windowX)) {
        dispatch(setFullScreen(false));
      }
    }
  }, [windowX]);

  const handleClose = () => {
    navigate("/", { replace: true });
  };
  const handleFullScreen = () => {
    dispatch(toggleFullScreen());
  };

  const hatPart = () => {
    return (
      <div onDoubleClick={handleFullScreen} className={styles.hat}>
        <div className={styles.hatMenu}>
          <button
            className={cn(styles.hatButton, styles.close)}
            onClick={handleClose}
            aria-label="Закрыть окно"
          >
            <CloseIcon />
          </button>
          <button
            className={cn(styles.hatButton)}
            onClick={handleFullScreen}
            aria-label="На весь экран"
          >
            <FullIcon />
          </button>
        </div>
        <div className={styles.hatHeader}>
          <HTag tag="h4">{title}</HTag>
        </div>
      </div>
    );
  };

  const contentPart = () => {
    return (
      <section
        className={cn(styles.content, {
          [styles.fullContent]: fullScreen,
        })}
        draggable
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <button
          className={cn(styles.button, styles.onMainButton)}
          onClick={handleClose}
          aria-label="Кнопка перехода к главному экрану"
        >
          <MainIcon />
        </button>
        <Outlet />
      </section>
    );
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
    >
      {fullScreen ? (
        <>
          {hatPart()}
          {contentPart()}
        </>
      ) : (
        <>
          <DraggableWrapper
            id={1}
            left={draggableItem.left}
            top={draggableItem.top}
          >
            {hatPart()}
            {contentPart()}
          </DraggableWrapper>

          <CustomDragLayer>
            {hatPart()}
            {contentPart()}
          </CustomDragLayer>
        </>
      )}
    </div>
  );
};
