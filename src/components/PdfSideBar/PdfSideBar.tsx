import { PdfSideBarProps } from "./PdfSideBar.props";
import cn from "classnames";
import styles from "./PdfSideBar.module.css";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";
import { Link } from "react-router-dom";

export function PdfSideBar({ anchors = [] }: PdfSideBarProps): JSX.Element {
  const fullScreen = useSelector(selectFullScreen);

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
            <Link to={`#${anchor.anchor}`} className={styles.link}>
              {anchor.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
