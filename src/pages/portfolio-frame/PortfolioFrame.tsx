import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FolderSideBar, PortfolioItem } from "../../components";
import { PortfolioItemI } from "../../interfaces/portfolio";
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
      },
      codeLink: {
        name: "Исходный код",
        value: "sds",
      },
    },
    previewLink: "",
    previewImage: "",
    description:
      "Панель администратора для ТЭК проекта. Позволяет отслеживать действия пользователей в расчетных программах группы ТЭК, создавать новых пользователей и генерировать ключи доступа.",
    instruments: ["react", "typescript", "redux", "materialUI"],
  },
];

export const PortfolioFrame = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Портфолио"));
  }, []);
  return <>what?</>;
};
