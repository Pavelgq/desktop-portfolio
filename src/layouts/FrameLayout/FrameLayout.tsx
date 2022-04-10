import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import cn from "classnames";
import styles from "./FrameLayout.module.css";
import { DragEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFullScreen,
  selectTitle,
  toggleFullScreen,
} from "../../store/mainStore";
import { ReactComponent as CloseIcon } from "../../assets/svg/icons/icons8-iOS Glyph-Close.svg";
import { ReactComponent as FullIcon } from "../../assets/svg/icons/icons8-Plumpy-Full Screen.svg";
import { HTag } from "../../components";
import {
  CustomDragLayer,
  DraggableWrapper,
} from "../../components/DraggableWrapper/DraggableWrapper";

interface ContextI {
  draggableItem: {
    top: number;
    left: number;
  };
}

export const FrameLayout = () => {
  const { draggableItem } = useOutletContext<ContextI>();
  console.log(draggableItem);
  const title = useSelector(selectTitle);
  const fullScreen = useSelector(selectFullScreen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          >
            <CloseIcon />
          </button>
          <button className={cn(styles.hatButton)} onClick={handleFullScreen}>
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
