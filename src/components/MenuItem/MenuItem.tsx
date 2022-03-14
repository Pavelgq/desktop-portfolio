import { Link } from "react-router-dom";

import styles from "./MenuItem.module.css";
import { MenuItemProps } from "./MenuItem.props";

export const MenuItem = ({ Icon, path, title }: MenuItemProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <Link to="path">
        <Icon />
        {title}
      </Link>
    </li>
  );
};
