import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FolderSideBar } from "../../components";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./PortfolioFrame.module.css";

const portfolioData = [
  {
    id: 1,
    name: "ТЭК Админ",
    compliteDate: 2021,
    licence: "",
    codeLink: "github.com",
    previewLink: "",
    previewImage: "",
    description: "",
    instruments: ["react", "typescript", "redux"],
  },
];

export const PortfolioFrame = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Портфолио"));
  }, []);
  return (
    <>
      <span>DDD</span>
    </>
  );
};
