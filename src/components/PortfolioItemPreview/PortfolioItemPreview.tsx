import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "../PortfolioItem/PortfolioItem.props";
import { Link, useNavigate } from "react-router-dom";
import { ImgTag, Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItemPreview.module.css";
import cn from "classnames";
import { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { selectFolderCurrentId } from "../../store/folderStore";
import { truncate } from "../../utils/view-utils";

export const PortfolioItemView = ({
  item,
  variant = "Table",
  className,
  handleClick = () => {},
}: PortfolioItemProps): JSX.Element => {
  const handleSelect = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleClick(item.id);
  };

  const currentId = useSelector(selectFolderCurrentId);

  return (
    <button
      type="button"
      className={cn(styles.itemContainer, className, {
        [styles.itemTable]: variant === "Table",
        [styles.itemTile]: variant === "Tile",
        [styles.active]: item.id === currentId,
      })}
      onClick={handleSelect}
      onDoubleClick={() =>
        item.previewLink && window.open(item.previewLink, "_blank")
      }
      title={item.name}
    >
      <ImgTag
        className={styles.image}
        width={50}
        height={30}
        src={item.previewImage || defaultPreview}
        alt={item.name}
      />
      {variant === "Table" && <span className={styles.title}>{item.name}</span>}
      {variant === "Tile" && (
        <span className={styles.title}>{truncate(11, item.name)}</span>
      )}
    </button>
  );
};
