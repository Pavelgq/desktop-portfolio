import { Link } from "react-router-dom";
import { Tag } from "..";
import { PortfolioOptionsI } from "../../interfaces/portfolio";
import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "./PortfolioItem.props";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItem.module.css";
import cn from "classnames";

export const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <img
        className={styles.previewImage}
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
        {Object.keys(item.options).map((option, i) => (
          <li key={i} className={styles.optionItem}>
            <span>{item.options[option as keyof PortfolioOptionsI]?.name}</span>
            <span>
              {item.options[option as keyof PortfolioOptionsI]?.value}
            </span>
          </li>
        ))}
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
