import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./MenuItem.module.css";
import { MenuItemProps } from "./MenuItem.props";

export const MenuItem = ({
  Icon,
  path,
  title,
  className,
  ...props
}: MenuItemProps): JSX.Element => {
  return (
    <li className={cn(styles.item, className)} {...props}>
      <Link to={path} className={styles.link}>
        <Icon className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </Link>
    </li>
  );
};
