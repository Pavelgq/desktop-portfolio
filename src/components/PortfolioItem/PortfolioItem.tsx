import { Link } from "react-router-dom";
import { ImgTag, Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "./PortfolioItem.props";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItem.module.css";
import cn from "classnames";

export const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <ImgTag
        width={250}
        height={150}
        src={item.previewImage || defaultPreview}
        alt={item.name}
      />

      <HTag tag="h3" className={styles.title}>
        {item.name}
      </HTag>
      <p className={styles.description}>{item.description}</p>
      <a
        className={styles.previewLink}
        href={item.previewLink}
        target={"_blank"}
        rel="noreferrer"
      >
        Просмотр
      </a>
      <ul className={styles.optionList}>
        {item.options.licence && (
          <li className={styles.optionItem}>
            <span>{item.options.licence.name}</span>
            <span>{item.options.licence.value}</span>
          </li>
        )}
        {item.options.codeLink && (
          <li className={styles.optionItem}>
            <span>{item.options.codeLink.name}</span>
            <a
              href={item.options.codeLink.value}
              target="_blank"
              rel="noreferrer"
            >
              ссылка
            </a>
          </li>
        )}
      </ul>

      <div className={styles.tags}>
        {item.instruments.map((tag, i) => (
          <Tag key={i} color="gray">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};
