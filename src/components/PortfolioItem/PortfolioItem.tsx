import { ImgTag, Modal, Tag } from "..";
import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "./PortfolioItem.props";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItem.module.css";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlarmMessage } from "../../store/mainStore";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ImgPreview } from "../ImgPreview/ImgPreview";

export const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent, link: string) => {
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
    <div className={styles.container}>
      <ImgPreview
        width={240}
        height={180}
        src={item.previewImage || defaultPreview}
        alt={item.name}
        className={styles.previewImage}
      />

      <HTag tag="h3" className={styles.title}>
        {item.name}
      </HTag>
      <p className={styles.period}>
        <span>{item.startDate}</span>-<span>{item.finishDate}</span>
      </p>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.previewLinkWrapper}>
        <button
          className={styles.linkButton}
          onClick={(e: MouseEvent) => handleClick(e, item.previewLink || "")}
        >
          Просмотр
        </button>
      </div>
      {item.info && <span className={styles.info}>{item.info}</span>}
      <ul className={styles.optionList}>
        {item.options.type && (
          <li className={styles.optionItem}>
            <span>{item.options.type.name}</span>
            <span>{item.options.type.value}</span>
          </li>
        )}
        {item.options.version && (
          <li className={styles.optionItem}>
            <span>{item.options.version.name}</span>
            <span>{item.options.version.value}</span>
          </li>
        )}
        {item.options.codeLink && (
          <li className={styles.optionItem}>
            <span>{item.options.codeLink.name}</span>
            <button
              className={styles.linkButton}
              onClick={(e: MouseEvent) =>
                handleClick(e, item.options.codeLink?.value || "")
              }
            >
              ссылка
            </button>
          </li>
        )}
      </ul>

      <div className={styles.tags}>
        {item.instruments.map((tag, i) => (
          <Tag key={i} color="gray" className={styles.tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};
