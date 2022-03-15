import { FooterItem } from "../../components";
import styles from "./Footer.module.css";

import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        <FooterItem title={"facebook"} path={"/welcome"} Icon={FacebookIcon} />
        <FooterItem title={"instagram"} path={"#"} Icon={InstIcon} />
        <FooterItem title={"linkedin"} path={"#"} Icon={LinkedinIcon} />
        <FooterItem title={"twitter"} path={"#"} Icon={TwitterIcon} />
        <FooterItem title={"facebook"} path={"#"} Icon={FacebookIcon} />
        <FooterItem title={"instagram"} path={"#"} Icon={InstIcon} />
        <FooterItem title={"linkedin"} path={"#"} Icon={LinkedinIcon} />
        <FooterItem title={"twitter"} path={"#"} Icon={TwitterIcon} />
      </ul>
      <ul className={styles.otherList}>
        <FooterItem title={"twitter"} path={"#"} Icon={TwitterIcon} />
      </ul>
    </footer>
  );
};
