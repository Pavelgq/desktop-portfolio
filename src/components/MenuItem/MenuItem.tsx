import { Link, NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./MenuItem.module.css";
import { MenuItemProps } from "./MenuItem.props";
import { truncate } from "../../utils/view-utils";

export const MenuItem = ({
  Icon,
  path,
  title,
  className,
  ...props
}: MenuItemProps): JSX.Element => {
  return (
    <li className={cn(styles.item, className)} {...props}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? cn(styles.link, styles.activeLink) : styles.link
        }
        title={title}
      >
        <Icon className={styles.icon} />
        <span className={styles.title}>{truncate(11, title)}</span>
      </NavLink>
    </li>
  );
};
