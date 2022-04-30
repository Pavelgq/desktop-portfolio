import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "../PortfolioItem/PortfolioItem.props";
import { Link } from "react-router-dom";
import { ImgTag, Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItemPreview.module.css";
import cn from "classnames";
import { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { selectFolderCurrentId } from "../../store/folderStore";

export const PortfolioItemView = ({
  item,
  variant = "Table",
  className,
  handleClick = () => {},
}: PortfolioItemProps): JSX.Element => {
  const handleSelect = (e: MouseEvent) => {
    e.preventDefault();
    handleClick(item.id);
  };

  const currentId = useSelector(selectFolderCurrentId);

  return (
    <div
      className={cn(styles.itemContainer, className, {
        [styles.itemTable]: variant === "Table",
        [styles.itemTile]: variant === "Tile",
        [styles.active]: item.id === currentId,
      })}
      onClick={handleSelect}
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
