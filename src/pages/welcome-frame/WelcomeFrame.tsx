import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigationType, useOutletContext } from "react-router-dom";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./WelcomeFrame.module.css";

import coding from "../../assets/img/coding.png";
import codingLamp from "../../assets/img/coding-lamp.png";
import codingTable from "../../assets/img/coding-table.png";
import { HTag, ImgTag } from "../../components";

export const WelcomeFrame = () => {
  const dispatch = useDispatch();
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
      <HTag tag="h3">Приветствую! Меня зовут Павел.</HTag>
      <p className={styles.subtitle}>
        Я <b>фронтенд разработчик</b> из Санкт-Петербурга. <br />
        Этот сайт создан для того, чтобы расказать обо мне подробее.
      </p>
    </div>
  );
};
