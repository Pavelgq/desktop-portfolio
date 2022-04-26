import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "../PortfolioItem/PortfolioItem.props";
import { Link } from "react-router-dom";
import { ImgTag, Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItemPreview.module.css";
import cn from "classnames";

export const PortfolioItemView = ({
  item,
  variant = "table",
  className,
}: PortfolioItemProps): JSX.Element => {
  return (
    <div
      className={cn(styles.itemContainer, className, {
        [styles.itemTable]: variant === "table",
        [styles.itemTile]: variant === "tile",
      })}
    >
      <ImgTag
        className={styles.image}
        width={50}
        height={30}
        src={item.previewImage || defaultPreview}
        alt={item.name}
      />
      <span className={styles.title}>{item.name}</span>
    </div>
  );
};
