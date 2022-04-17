import cn from "classnames";
import { NavBarButtonProps } from "./NavBarButton.props";
import styles from "./NavBarButton.module.css";

export const NavBarButton = ({
  active,
  children,
  className,
  ...props
}: NavBarButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.active]: active,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
