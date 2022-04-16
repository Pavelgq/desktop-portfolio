import cn from "classnames";
import { NavBarButtonProps } from "./NavBarButton.props";
import styles from "./NavBarButton.module.css";

export const NavBarButton = ({
  icon,
  action,
  className,
}: NavBarButtonProps) => {
  return (
    <button className={cn(className)} onClick={action}>
      {icon}
    </button>
  );
};
