import { PortfolioItemI } from "../interfaces/portfolio";

export const portfolioData: PortfolioItemI[] = [
  {
    id: 1,
    name: "ТЭК Админ",
    startDate: '15 декабря 2021',
    finishDate: '20 июня 2022',
    options: {
      version: {
        name: "Версия",
        value: "demo",
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
    startDate: '30 ноября 2021',
    finishDate: '2 марта 2022',
    options: {
      version: {
        name: "Версия",
        value: "1.0.1",
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
    previewImageSmall: "/img/portfolio/plc-admin-preview-small.png",
    description:
      'Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.',
    instruments: ["nodejs", "express", "REST API", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Speech Therapy Games",
    startDate: '4 сентября 2020',
    finishDate: '22 ноября 2020',
    options: {
      version: {
        name: "Версия",
        value: "demo",
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
    previewImageSmall: "",
    description:
      "Коллекция игр для Speech проекта. Здесь генерируются игры из приходящих с сервера данных. ",
    instruments: ["ES6", "pixijs", 'OOP'],
  },
  {
    id: 4,
    name: "Todo Wall",
    startDate: '8 ноября 2021',
    finishDate: "21 ноября 2021",
    options: {
      version: {
        name: "Версия",
        value: "demo",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/todo-wall",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/todo-kanban-wall/",
    previewImage: "/img/portfolio/todo-wall.png",
    previewImageSmall: "",
    description:
      "Простое Todo приложение с возможностью делать множество списков на одном экране.",
    instruments: ["react", "ts", "redux"],
  },
  {
    id: 5,
    name: "SGM",
    startDate: '27 июля 2020',
    finishDate: "3 сентября 2020",
    options: {
      version: {
        name: "Версия",
        value: "0.9.0",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/SGM-game",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/SGM-game/",
    previewImage: "/img/portfolio/sgm.png",
    previewImageSmall: "",
    description:
      "SGM (Space Guild Manager) - браузерная игра. Задумывалась как экономическая стратегия. В разработке. ",
    instruments: ["ES6", "gulp", "OOP"],
  },
  {
    id: 6,
    name: "Burning-Report",
    startDate: '16 июль 2020',
    finishDate: "9 сентября 2020",
    options: {
      version: {
        name: "Версия",
        value: "0.1.0",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/burning-report",
        link: true,
      },
    },
    previewLink: "",
    previewImage: "",
    previewImageSmall: "",
    description:
      "Приложение для производственного терминала, установленного на участке обжига производственного цеха. Позволяет создавать и просматривать отчеты по текущим смена и фиксировать вход/выход партий на участке.",
    instruments: ["express", "vue", "vuex", "less", "mssql"],
  },
  {
    id: 7,
    name: "ТЭК",
    startDate: '1 декабря 2018',
    finishDate: "9 октября 2019",
    options: {
      version: {
        name: "Версия",
        value: "1.0.0",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "",
        link: true,
      },
    },
    previewLink: "",
    previewImage: "/img/portfolio/tek.png",
    previewImageSmall: "",
    description:
      "Серия приложений для инженерных расчетов высоковольтных сетей. Трубы(для прокладки кабеля), разновидности экрана и самого кабеля. ",
    instruments: ["jquery", "ES5"],
    defence: true
  },
];



