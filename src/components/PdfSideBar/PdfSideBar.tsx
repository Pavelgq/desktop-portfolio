import { PdfSideBarProps } from "./PdfSideBar.props";
import cn from "classnames";
import styles from "./PdfSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFullScreen, setCurrentFrameScroll } from "../../store/mainStore";
// import { Link } from "react-router-dom";
import { Link, Events, scrollSpy } from "react-scroll";
import { MouseEvent, useEffect } from "react";

export function PdfSideBar({ anchors = [] }: PdfSideBarProps): JSX.Element {
  const fullScreen = useSelector(selectFullScreen);
  const dispatch = useDispatch();
  const handleClick = (e: MouseEvent, targetAnchor: string) => {
    const posY: number | undefined = document.getElementById(
      `${targetAnchor}`
    )?.offsetTop;
    dispatch(setCurrentFrameScroll(posY && posY - 40));
  };

  if (!anchors.length) {
    return <></>;
  }
  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
    >
      <ol className={styles.list}>
        {anchors.map((anchor) => (
          <li key={anchor.id}>
            <button
              className={styles.link}
              onClick={(e: MouseEvent) => handleClick(e, anchor.anchor)}
            >
              {anchor.name}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
