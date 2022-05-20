import { FooterItem } from "../../components";
import styles from "./Footer.module.css";

import { ReactComponent as TelegramIcon } from "../../assets/svg/icons/icons8-plasticine-Telegram App.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/icons/icons8-plasticine-Github Squared.svg";
//import { ReactComponent as LinkedinIcon } from "../../assets/svg/icons/icons8-plasticine-LinkedIn.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/icons/icons8-plasticine-Twitter.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/icons/icons8-plasticine-Mail.svg";

import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-plasticine-Downloads.svg";

import { ReactComponent as TrashIcon } from "../../assets/svg/icons/icons8-plasticine-Trash Can.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MouseEvent, useEffect, useState } from "react";
import { checkMobile } from "../../utils/dom-utils";
import cn from "classnames";

export const Footer = () => {
  const [windowX] = useWindowSize();

  const [defultWidth, setDefultWidth] = useState(0);

  const handleMouseEnter = (e: MouseEvent) => {
    const items: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".footerItem");
    items.forEach((item, i) => {
      item.classList.add("easeInAnimation");
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (checkMobile(windowX)) {
      return;
    }
    const list = document.querySelector("footer");
    const listCoords = list?.getBoundingClientRect();
    if (!listCoords) {
      return;
    }
    const items: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".footerItem");
    const targetPos = e.clientX;
    items.forEach((item, i) => {
      item.classList.remove("easeInAnimation");
      const itemCoords = item.getBoundingClientRect();
      const itemCenterX = itemCoords.left + defultWidth / 2;
      const way =
        Math.abs(targetPos - itemCenterX) / (defultWidth * 4) > 1
          ? 1
          : Math.abs(targetPos - itemCenterX) / (defultWidth * 4);

      const persent = 1 - 1.5 * way + 0.1 * way * way;
      item.style.width = `${
        defultWidth + defultWidth * (persent >= 0 ? persent : 0)
      }px`;
      item.style.height = `${
        defultWidth + defultWidth * (persent >= 0 ? persent : 0)
      }px`;
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    console.log("leave");

    const items: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".footerItem");
    items.forEach((item, i) => {
      item.classList.add("easeInAnimation");
      item.style.width = `${defultWidth}px`;
      item.style.height = `${defultWidth}px`;
    });
  };

  useEffect(() => {
    const width = document?.querySelector(".footerItem");
    console.log('footer effect', width, width?.getBoundingClientRect().width )
    setDefultWidth(width?.getBoundingClientRect().width || 0);
  }, []);

  return (
    <div
      className={cn(styles.container, "footerContainer")}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <footer className={styles.footer}>
        <ul className={styles.contactList}>
          <FooterItem
            className="footerItem"
            title={"Github"}
            path={"https://github.com/Pavelgq"}
            Icon={GithubIcon}
          />
          {/* <FooterItem title={"linkedin"} path={"#"} Icon={LinkedinIcon} /> */}
          <FooterItem
            className="footerItem"
            title={"Twitter"}
            path={"https://twitter.com/atmeengineer"}
            Icon={TwitterIcon}
          />
          <FooterItem
            className="footerItem"
            title={"Telegram"}
            path={"https://t.me/atme3"}
            Icon={TelegramIcon}
          />
          <FooterItem
            className="footerItem"
            title={"E-mail"}
            path={"mailto:pavelgq@yandex.ru?subject=Предложение работы"}
            Icon={EmailIcon}
          />
        </ul>
        {!checkMobile(windowX) && (
          <ul className={styles.otherList}>
            <FooterItem
              className="footerItem"
              title={"Загрузки"}
              path={"/frame/not-found"}
              isOuterLink={false}
              Icon={DownloadIcon}
            />
            <FooterItem
              className="footerItem"
              title={"Корзина"}
              path={"/frame/not-found"}
              isOuterLink={false}
              Icon={TrashIcon}
            />
          </ul>
        )}
      </footer>
    </div>
  );
};
