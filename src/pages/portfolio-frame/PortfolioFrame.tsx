import cn from "classnames";
import { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  FolderSideBar,
  PortfolioItem,
  PortfolioItemView,
} from "../../components";
import { PortfolioItemI } from "../../interfaces/portfolio";
import {
  selectFolderInfoBar,
  selectFolderPalletView,
  setFolderCuttentId,
} from "../../store/folderStore";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./PortfolioFrame.module.css";
export const portfolioData: PortfolioItemI[] = [
  {
    id: 1,
    name: "ТЭК Админ",
    finishDate: new Date(),
    options: {
      licence: {
        name: "Лицензия",
        value: "CFD",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/power-lines-calculator-admin",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/power-lines-calculator-admin/",
    previewImage: "/img/portfolio/plc-admin-preview.png",
    description:
      "Панель администратора для стороннего проекта. Позволяет отслеживать действия пользователей в расчетных программах, создавать новых пользователей, генерировать ключи доступа и пр.",
    instruments: ["react", "typescript", "redux", "materialUI"],
    info: "Логин: admin, пароль: admin",
  },
  {
    id: 2,
    name: "ТЭК Сервер",
    finishDate: new Date(),
    options: {
      licence: {
        name: "Лицензия",
        value: "CFD",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/power-lines-calculators-server",
        link: true,
      },
    },
    previewLink: "https://hidden-inlet-89012.herokuapp.com",
    previewImage: "/img/portfolio/plc-admin-preview.png",
    description:
      'Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.',
    instruments: ["nodejs", "express", "REST API", "PostgreSQL"],
    info: "Логин: admin, пароль: admin",
  },
  {
    id: 3,
    name: "Speech Therapy Games",
    finishDate: new Date("22.11.2021"),
    options: {
      licence: {
        name: "Лицензия",
        value: "CFD",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/speech-therapy-games",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/speech-therapy-games/",
    previewImage: "/img/portfolio/speech-game-preview.png",
    description:
      "Коллекция игр для Speech проекта. Здесь генерируются игры из приходящих с сервера данных. ",
    instruments: ["ES6", "pixijs"],
    info: "Логин: admin, пароль: admin",
  },
];

export const PortfolioFrame = () => {
  const infoBar = useSelector(selectFolderInfoBar);
  const palletView = useSelector(selectFolderPalletView);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Портфолио"));
  }, []);

  const handleSelect = (id: number) => {
    dispatch(setFolderCuttentId(id));
  };

  return (
    <div
      className={cn(styles.itemList, {
        [styles.table]: palletView === "Table",
        [styles.tile]: palletView === "Tile",
      })}
      onClick={() => handleSelect(0)}
    >
      {portfolioData.map((item, i) => (
        <PortfolioItemView
          key={item.id}
          item={item}
          variant={palletView}
          className={styles.portfolioItem}
          handleClick={handleSelect}
        />
      ))}
    </div>
  );
};
