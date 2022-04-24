import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "../PortfolioItem/PortfolioItem.props";
import { Link } from "react-router-dom";
import { Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItemPreview.module.css";
import cn from "classnames";

export const PortfolioItemView = ({
  item,
  variant = "table",
}: PortfolioItemProps): JSX.Element => {
  return (
    <div
      className={cn(styles.itemContainer, {
        [styles.itemTable]: variant === "table",
        [styles.itemTile]: variant === "tile",
      })}
    >
      <img
        className={styles.previewImage}
        src={item.previewImage || defaultPreview}
        alt={item.name}
      />
      <HTag tag="h4">{item.name}</HTag>
    </div>
  );
};
