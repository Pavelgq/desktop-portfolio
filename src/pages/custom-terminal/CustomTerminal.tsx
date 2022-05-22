import { useEffect } from "react";
import Terminal from "react-console-emulator";
import { useDispatch } from "react-redux";
import { setTargetWindowTitle } from "../../store/mainStore";
import styles from "./CustomTerminal.module.css";

interface CommandProps {
  description: string;
  usage?: string;
  fn: Function;
}

// const commands: CommandProps = {
//   description: " ",
//   usage: "",
//   fn: function () {
//     return ``;
//   },
// };

export function CustomTerminal() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Terminal"));
  }, []);
  return (
    <Terminal className={styles.terminal} promptLabel={"pavel@portfolio:~$"} />
  );
}
