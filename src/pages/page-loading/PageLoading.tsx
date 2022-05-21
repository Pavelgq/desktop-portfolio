import { useEffect } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { loadingComplite, selectMainLoading } from "../../store/mainStore";
import styles from "./PageLoading.module.css";
import { ReactComponent as HammerIcon } from "../../assets/svg/hammer.svg";

export const PageLoading = () => {
  const mainLoading = useSelector(selectMainLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(loadingComplite());
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={cn(styles.screen, {
        [styles.hidden]: !mainLoading,
      })}
    >
      <HammerIcon className={styles.icon} />
      <div className={styles.progress}></div>
    </div>
  );
};
