import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PageNotFoundIcon } from "../../assets/svg/page-not-found.svg";
import { setTargetWindowTitle } from "../../store/mainStore";

import styles from "./NotFound.module.css";

export const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Error: Page not found"));
  }, []);
  return (
    <div className={styles.wrapper}>
      <PageNotFoundIcon />
    </div>
  );
};
