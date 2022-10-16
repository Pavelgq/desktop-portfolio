import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./GameFrame.module.css";

export const GameFrame = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("SGM Game"));
  }, []);
  return (
    <iframe
      className={styles.frame}
      src="https://pavelgq.github.io/SGM-game/"
      title="description"
    ></iframe>
  );
};
