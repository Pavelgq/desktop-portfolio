import { Link, useNavigate } from "react-router-dom";
import cn from "classnames";

import styles from "./FooterItem.module.css";
import { FooterItemProps } from "./FooterItem.props";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlarmMessage } from "../../store/mainStore";

export const FooterItem = ({
  Icon,
  path,
  title,
  isOuterLink = true,
  className,
  ...props
}: FooterItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleClick = (e: MouseEvent, link: string) => {
    e.preventDefault();
    if (link) {
      window.open(link, "_blank");
    } else {
      dispatch(setAlarmMessage("inWork"));
    }
  };

  const handleOpenFrame = (e: MouseEvent, link: string) => {
    e.preventDefault();
    if (link !== "/frame/not-found") {
      navigator(link);
    } else {
      dispatch(setAlarmMessage("inWork"));
    }
  };

  return (
    <>
      <li className={cn(styles.item, className)} {...props}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>

        {isOuterLink ? (
          <a
            href={path}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <Icon className={styles.icon} />
          </a>
        ) : (
          <button
            className={styles.link}
            onClick={(e: MouseEvent) => handleOpenFrame(e, path)}
          >
            <Icon className={styles.icon} />
          </button>
        )}
      </li>
    </>
  );
};
