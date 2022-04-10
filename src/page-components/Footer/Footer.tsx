import { FooterItem } from "../../components";
import styles from "./Footer.module.css";

import { ReactComponent as TelegramIcon } from "../../assets/svg/icons/icons8-plasticine-Telegram App.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/icons/icons8-plasticine-Github Squared.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/icons/icons8-plasticine-LinkedIn.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/icons/icons8-plasticine-Twitter.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/icons/icons8-plasticine-Mail.svg";

import { ReactComponent as DownloadIcon } from "../../assets/svg/icons/icons8-plasticine-Downloads.svg";

import { ReactComponent as TrashIcon } from "../../assets/svg/icons/icons8-plasticine-Trash Can.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        <FooterItem
          title={"Github"}
          path={"https://github.com/Pavelgq"}
          Icon={GithubIcon}
        />
        <FooterItem title={"linkedin"} path={"#"} Icon={LinkedinIcon} />
        <FooterItem
          title={"twitter"}
          path={"https://twitter.com/atmeengineer"}
          Icon={TwitterIcon}
        />
        <FooterItem
          title={"telegram"}
          path={"https://t.me/atme3"}
          Icon={TelegramIcon}
        />
        <FooterItem
          title={"email"}
          path={"mailto:pavelgq@yandex.ru?subject=Предложение работы"}
          Icon={EmailIcon}
        />
      </ul>
      <ul className={styles.otherList}>
        <FooterItem title={"Загрузки"} path={"/welcome"} Icon={DownloadIcon} />
        <FooterItem title={"Корзина"} path={"#"} Icon={TrashIcon} />
      </ul>
    </footer>
  );
};
