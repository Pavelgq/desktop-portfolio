import { HTag } from "../HTag/HTag";
import styles from "./WorkPlaceItem.module.css";

export interface WorkPlaceItemProps {
  place: string;
  role: string;
  interval: string;
  info: JSX.Element;
}

export const WorkPlaceItem = ({
  place,
  role,
  interval,
  info,
}: WorkPlaceItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <HTag tag="h4">{place}</HTag>
        <span className={styles.separator}>&mdash;</span>
        <span>{role}</span>
      </div>
      <span className={styles.interval}>{interval}</span>
      {info}
    </li>
  );
};
