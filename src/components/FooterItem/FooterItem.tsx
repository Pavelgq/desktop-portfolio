import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./FooterItem.module.css";
import { FooterItemProps } from "./FooterItem.props";

export const FooterItem = ({
  Icon,
  path,
  title,
  className,
  ...props
}: FooterItemProps): JSX.Element => {
  return (
    <li className={cn(styles.item, className)} {...props}>
      <span className={styles.title}>{title}</span>
      <Link to={path} className={styles.link}>
        <Icon className={styles.icon} />
      </Link>
    </li>
  );
};
