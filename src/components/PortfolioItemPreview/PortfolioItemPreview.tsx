import { PortfolioItemProps } from "../PortfolioItem/PortfolioItem.props";
import { ImgTag } from "..";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItemPreview.module.css";
import cn from "classnames";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFolderCurrentId } from "../../store/folderStore";
import { truncate } from "../../utils/view-utils";
import { setAlarmMessage } from "../../store/mainStore";

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

  const dispatch = useDispatch();

  const handleDoubleClick = (e: MouseEvent, link: string) => {
    e.preventDefault();
    if (link) {
      window.open(link, "_blank");
    } else {
      item.defence
        ? dispatch(setAlarmMessage("defence"))
        : dispatch(setAlarmMessage("fixed"));
    }
  };
  return (
    <button
      type="button"
      className={cn(styles.itemContainer, className, {
        [styles.itemTable]: variant === "Table",
        [styles.itemTile]: variant === "Tile",
        [styles.active]: item.id === currentId,
      })}
      onClick={handleSelect}
      onDoubleClick={(e) => handleDoubleClick(e, item.previewLink || "")}
      title={item.name}
    >
      <ImgTag
        className={styles.image}
        width={160}
        height={110}
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
