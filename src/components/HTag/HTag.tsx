import React from "react";
import { HTagProps } from "./HTag.props";

import styles from "./HTag.module.css";
import cn from "classnames";

export const HTag = ({
  tag,
  id,
  className,
  children,
}: HTagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1)} id={id}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h2, className)} id={id}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.h3, className)} id={id}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={styles.h4} id={id}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};
