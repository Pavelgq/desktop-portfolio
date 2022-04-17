import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "s",
  color = "primary",
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, styles[size], styles[color], className)}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
