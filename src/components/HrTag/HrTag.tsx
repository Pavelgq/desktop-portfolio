import cn from "classnames";
import styles from "./HrTag.module.css";
import { HrTagProps } from "./HrTag.props";

export const HrTag = ({
  className,
  thickness = "low",
  ...props
}: HrTagProps): JSX.Element => {
  return (
    <hr
      className={cn(className, styles.hr, {
        [styles.low]: thickness === "low",
        [styles.medium]: thickness === "medium",
        [styles.high]: thickness === "high",
      })}
      {...props}
    />
  );
};
