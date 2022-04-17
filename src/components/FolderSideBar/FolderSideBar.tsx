import cn from "classnames";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";
import styles from "./FolderSideBar.module.css";

export function FolderSideBar() {
  const fullScreen = useSelector(selectFullScreen);
  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
    ></div>
  );
}
