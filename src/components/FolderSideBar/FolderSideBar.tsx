import cn from "classnames";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ScrollObserver } from "..";
import { selectSidebarScrollPosition, setSidebarScrollPosition } from "../../store/folderStore";
import { selectFullScreen } from "../../store/mainStore";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
import styles from "./FolderSideBar.module.css";
import { FolderSideBarProps } from "./FolderSideBar.props";

export function FolderSideBar({ data, className, children, ref, ...props }: FolderSideBarProps): JSX.Element {
  const fullScreen = useSelector(selectFullScreen);
  
  return (
    <div className={cn(className, styles.container, {
        [styles.fullScreen]: fullScreen,
      })} {...props}>
      {data && <PortfolioItem currentId={data.id} item={data} key={data.id} />}
    </div>
  );
}
