import cn from "classnames";
import { useSelector } from "react-redux";
import { portfolioData } from "../../pages/portfolio-frame/PortfolioFrame";
import { selectFullScreen } from "../../store/mainStore";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
import styles from "./FolderSideBar.module.css";

export function FolderSideBar() {
  const fullScreen = useSelector(selectFullScreen);
  return (
    <div
      className={cn(styles.container, {
        [styles.fullScreen]: fullScreen,
      })}
    >
      {portfolioData.map((data, i) => (
        <PortfolioItem item={data} key={data.id} />
      ))}
    </div>
  );
}
