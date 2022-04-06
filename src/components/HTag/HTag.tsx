import React from "react";
import { HTagProps } from "./HTag.props";

import styles from "./HTag.module.css";

export const HTag = ({ tag, children }: HTagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    case "h4":
      return <h4 className={styles.h4}>{children}</h4>;
    default:
      return <></>;
  }
};
