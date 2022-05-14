import { PortfolioItemI } from "../interfaces/portfolio";

export const portfolioData: PortfolioItemI[] = [
  {
    id: 1,
    name: "ТЭК Админ",
    startDate: '15 декабря 2021',
    finishDate: 'по настоящее время',
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
    finishDate: '2 марта 2021',
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
      'Серверная программа для проекта "ТЭК Админ". Предоставляет интерфейс для сбора, хранения и обработки данных.',
    instruments: ["nodejs", "express", "REST API", "PostgreSQL"],
    info: "Логин: admin, пароль: admin",
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
    info: "Логин: admin, пароль: admin",
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
      "Приложение для производственного терминала, установленного на участке обжига производственного цеха. Позволяет создавать и просматривать отчеты по текущим смена и фиксировать вход/выход партий на участке.",
    instruments: ["jquery", "ES5"],
  },
];



export const coursesData: PortfolioItemI[] = [
  {
    id: 1,
    name: "Nerds",
    startDate: '1 марта 2020',
    finishDate: '12 марта 2020',
    options: {
      type: {
        name: "Тип",
        value: "Верстка",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/nerds",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/nerds/index.html",
    previewImage: "/img/courses/nerds.png",
    description:
      "Простой макет сайта интернет магазина шаблонов от HTML Academy.",
    instruments: ["css"],
  },
  {
   id: 2,
    name: "Sedona",
    startDate: '13 февраля 2020',
    finishDate: '29 февраля 2020',
    options: {
      type: {
        name: "Тип",
        value: "Верстка",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/nerds",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/sedona/",
    previewImage: "/img/courses/sedona.png",
    description:
      "Резиновая верстка макета сайта туристической тематики от HTML Academy.",
    instruments: ["css"],
  },
  {
    id: 3,
    name: "Cat Energy",
    startDate: '17 марта 2020',
    finishDate: '12 апреля 2020',
    options: {
      type: {
        name: "Тип",
        value: "Верстка",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://pavelgq.github.io/cat-energy/index.html",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/cat-energy",
    previewImage: "/img/courses/cat-energy.png",
    description:
      "Адаптивный макет сайта интернет магазина от HTML Academy.",
    instruments: ["less", "gulp"],
  },
  {
    id: 4,
    name: "Гео-Отзыв",
    startDate: '2 мая 2020',
    finishDate: '13 июня 2020',
    options: {
      type: {
        name: "Тип",
        value: "Приложение",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/geo-review",
        link: true,
      },
    },
    previewLink: "https://pavelgq.github.io/geo-review/",
    previewImage: "/img/courses/geo-review.png",
    description:
      "Учебный проект от loftschool на основе YandexMapAPI. На карте можно выбирать объекты и оставлять отзывы о них.",
    instruments: ["less", "webpack", 'ES6', 'yandexMapAPI'],
  },
  {
    id: 5,
    name: "Другофильтр",
    startDate: '16 апреля 2020',
    finishDate: '26 апреля 2020',
    options: {
      type: {
        name: "Тип",
        value: "Приложение",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/friends-filter",
        link: true,
      },
    },
    previewLink: "",
    previewImage: "/img/courses/friend-filter.png",
    description:
      "Учебный проект от loftschool на основе vkApi. Позволяет фильтровать список друзей взятый из аккаунта vk.",
    instruments: ["css", "vkAPI", "ES6"],
  },
  {
    id: 6,
    name: "chat-room",
    startDate: '24 июня 2020',
    finishDate: '19 июля 2020',
    options: {
      type: {
        name: "Тип",
        value: "SPA",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/chat-room",
        link: true,
      },
    },
    previewLink: "",
    previewImage: "",
    description:
      "Учебный проект на основе WebSocket. Чат комната с серверной авторизацией (изменение пользовательских данных, аватара, сохраниение истории на сервере и пр.)",
    instruments: ["css", "WebSocket", "ES6", ""],
  },
  {
    id: 7,
    name: "top-app",
    startDate: '6 октября 2021',
    finishDate: '7 ноября 2021',
    options: {
      type: {
        name: "Тип",
        value: "SSG",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/top-app",
        link: true,
      },
    },
    previewLink: "https://top-lfyybgh45-pavelgq.vercel.app/courses/financial-analytics",
    previewImage: "/img/courses/top-app.png",
    description:
      "Учебный проект на NextJS от LoftSchool. ",
    instruments: ["nextJS", "ts"],
  },
  {
    id: 8,
    name: "medium-clone",
    startDate: '8 января 2021',
    finishDate: '10 марта 2021',
    options: {
      type: {
        name: "Тип",
        value: "SPA",
        link: false,
      },
      codeLink: {
        name: "Исходный код",
        value: "https://github.com/Pavelgq/medium-clone-reactjs",
        link: true,
      },
    },
    previewLink: "",
    previewImage: "/img/courses/top-app.png",
    description:
      "Учебный проект на NextJS от LoftSchool. ",
    instruments: ["nextJS", "ts"],
  },
];

