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
    <>
      <li className={cn(styles.item, className)} {...props}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>

        <a href={path} className={styles.link} target="_blank" rel="noreferrer">
          <Icon className={styles.icon} />
        </a>
      </li>
    </>
  );
};
