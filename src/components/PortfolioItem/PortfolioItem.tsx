import { ImgTag, Tag } from "..";
import { HTag } from "../HTag/HTag";
import { PortfolioItemProps } from "./PortfolioItem.props";
import defaultPreview from "../../assets/img/portfolio-default.png";
import styles from "./PortfolioItem.module.css";

export const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <ImgTag src={item.previewImage || defaultPreview} alt={item.name} />

      <HTag tag="h3" className={styles.title}>
        {item.name}
      </HTag>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.previewLinkWrapper}>
        <a
          className={styles.previewLink}
          href={item.previewLink}
          target={"_blank"}
          rel="noreferrer"
        >
          Просмотр
        </a>
      </div>

      <ul className={styles.optionList}>
        {item.options.version && (
          <li className={styles.optionItem}>
            <span>{item.options.version.name}</span>
            <span>{item.options.version.value}</span>
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
