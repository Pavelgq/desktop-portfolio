import cn from "classnames";
import { LanguageItemProps } from "./LanguageItem.props";
import styles from "./LanguageItem.module.css";

export const LanguageItem = ({
  imgPath,
  title,
  active = false,
  className,
  ...props
}: LanguageItemProps) => {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        {
          [styles.active]: active,
        },
        className
      )}
      {...props}
    >
      <img src={imgPath} alt={title} className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </button>
  );
};
