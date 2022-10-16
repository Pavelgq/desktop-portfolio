import { PortfolioItemI } from "../interfaces/portfolio";


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
        value: "https://github.com/Pavelgq/sedona",
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
    instruments: ["less", "gulp", "ES6"],
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
    name: "Друго-Фильтр",
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
    instruments: ["css", "WebSocket", "ES6"],
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
      "Учебный проект на NextJS от Udemy. ",
    instruments: ["nextJS", "react", "ts"],
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
    previewLink: "https://pavelgq.github.io/medium-clone-reactjs/",
    previewImage: "/img/courses/medium-clone.png",
    description:
      "Учебный проект по React Hooks от Udemy. ",
    instruments: ["react", "ts", 'sass'],
  },
];

