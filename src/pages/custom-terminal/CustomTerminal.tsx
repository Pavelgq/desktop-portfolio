import { useEffect, useState } from "react";
import Terminal from "react-console-emulator";
import { useDispatch } from "react-redux";
import { setTargetWindowTitle } from "../../store/mainStore";
import { useNavigate } from "react-router-dom";
// import styles from "./CustomTerminal.module.css";

// interface CommandProps {
//   description: string;
//   usage?: string;
//   fn: Function;
// }

interface CommandDefinition {
  description: string;
  usage: string;
  execute: (args: string[]) => string | Promise<string>;
}

interface EasterEggDefinition {
  command: string;
  response: string | (() => string | Promise<string>); // Пасхалка может возвращать строку или функцию
}

// const commands: CommandProps = {
//   description: " ",
//   usage: "",
//   fn: function () {
//     return ``;
//   },
// };

const easterEggs = {
  "why?": {
    usage: "why?",
    fn: () => {
      return "Because, why not?";
    },
  },
  //TODO: переписать эти пасхалки как команды (ask {some details})
  // отвечает я не знаю или что-то конкретное
  // joke: {
  //   usage: "tell me a joke",
  //   fn: () => {
  //     return "Why don't scientists trust atoms? Because they make up everything!";
  //   },
  // },
  // what: {
  //   usage: "what is the meaning of life?",
  //   fn: () => {
  //     return "42";
  //   },
  // },
  hello: {
    usage: "hello",
    fn: () => {
      return "Hello! Welcome to the console.";
    },
  },
};

export const CustomTerminal: React.FC = () => {
  const [_isFormatting, setIsFormatting] = useState(false); // Состояние для заставки форматирования
  const navigate = useNavigate();

  const onFormatTrigger = () => setIsFormatting(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTargetWindowTitle("Terminal"));
  }, []);
  const commands = {
    "--help": {
      description: "Display all(?) available commands",
      usage: "--help",
      fn: (): string => {
        return (
          `Available commands:\n` +
          Object.entries(commands)
            .map(
              ([cmd, { description }]) => `${cmd.padEnd(12)} - ${description}`
            )
            .join("\n")
        );
      },
    },
    rm: {
      description: "Remove files or directories (use with caution)",
      usage: "rm -rf",
      fn: (...args: string[]) => {
        if (args.includes("-rf")) {
          if (onFormatTrigger) {
            onFormatTrigger();
          }
          return "Initiating system format sequence...";
        }
        return "Usage: rm -rf (this will trigger formatting)";
      },
    },
    open: {
      description: "Navigate to specified path",
      usage: "open <path>",
      fn: (...args: string[]) => {
        if (args.length === 0) {
          return "Usage: open <path>";
        }
        const path = args[0];
        if (navigate) {
          navigate(path);
        }
        return `Opening path: ${path}`;
      },
    },
    sudo: {
      description: "Execute command as superuser (hidden command)",
      usage: "sudo <command>",
      fn: () => {
        return `Nice try! 😉\nBut you'll need more than that to get admin access.`;
      },
    },
  };

  const allComands = { ...commands, ...easterEggs };

  return (
    <Terminal
      promptLabel={"pavel@portfolio:~$"}
      commands={allComands}
      welcomeMessage={"Welcome to terminal\nType --help for available commands"}
      inputTextColor={"#4af"}
      outputTextColor={"#f0f0f0"}
      errorTextColor={"#f44336"}
      backgroundColor={"#1e1e1e"}
      promptTextColor={"#4af"}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    />
  );
};
