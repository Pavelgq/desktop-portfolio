import { SideBarProps } from "./SideBar.props";
import cn from "classnames";
import styles from "./SideBar.module.css";
import { useSelector } from "react-redux";
import { selectFullScreen } from "../../store/mainStore";

export function SideBar({ anchors = [] }: SideBarProps): JSX.Element {
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
            <a href={`#${anchor.anchor}`} className={styles.link}>
              {anchor.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
