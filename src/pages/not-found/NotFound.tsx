import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PageNotFoundIcon } from "../../assets/svg/page-not-found.svg";
import { setTargetWindowTitle } from "../../store/mainStore";

import styles from "./NotFound.module.css";

export const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Error: Page not found"));
    const loader = document.querySelector(".screen-loader");
    loader?.classList.add("hidden");
  }, []);
  return (
    <div className={styles.wrapper}>
      <PageNotFoundIcon />
    </div>
  );
};
function loadingComplite(): any {
  throw new Error("Function not implemented.");
}

