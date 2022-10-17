import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocaleWelcome,
  setTargetWindowTitle,
} from "../../store/mainStore";
import styles from "./WelcomeFrame.module.css";

import coding from "../../assets/img/coding.png";
import codingLamp from "../../assets/img/coding-lamp.png";
import codingTable from "../../assets/img/coding-table.png";
import { HTag, ImgTag } from "../../components";

export const WelcomeFrame = () => {
  const dispatch = useDispatch();
  const locale = useSelector(selectLocaleWelcome);
  useEffect(() => {
    dispatch(setTargetWindowTitle("README"));
  }, []);

  return (
    <div className={styles.container}>
      <ImgTag
        width={406}
        height={331}
        className={styles.imageMove}
        src={codingLamp}
        alt="Cooding"
      />
      <ImgTag
        width={406}
        height={331}
        className={styles.image}
        src={codingTable}
        alt="Cooding"
      />
      <HTag tag="h3">{locale.welcome.hello}</HTag>
      <p className={styles.subtitle}>
        {locale.shortAbout[0]}
        <b> {locale.welcome.shortAbout[1]}</b>
        {locale.welcome.shortAbout[2]}
        <br />
        {locale.welcome.shortAbout[3]} <br />
      </p>
      <p>
        <i>{locale.welcome.instructions}</i>
      </p>
    </div>
  );
};
