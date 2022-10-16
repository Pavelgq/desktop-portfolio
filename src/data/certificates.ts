import { PortfolioItemI } from "../interfaces/portfolio";

export const certificatesData: PortfolioItemI[] = [
  {
    id: 1,
    name: "Школа разработки интерфейсов Яндекс",
    startDate: '11 июля 2022',
    finishDate: '27 сентября 2022',
    options: {
      type: {
        name: "Тип",
        value: "Обучение",
        link: false,
      },
    },
    previewImage: "/img/certificates/yandex-shri-2022.jpg",
    description:
      "Школа разработки интерфейсов Яндекс",
    instruments: ["scss", "ES6+", "typescript", "react", "nodejs", "CI/CD", "jest", "RTL", "selenium"],
  },
  {
    id: 2,
    name: "Yandex Cup 2020",
    startDate: 'июнь 2020',
    finishDate: 'сентябрь 2020',
    options: {
      type: {
        name: "Тип",
        value: "Соревнование",
        link: false,
      },
      task: {
        name: "Задачи",
        value: "https://github.com/Pavelgq/", //TODO: Правильная ссылка на задач
        link: true,
      },
    },
    previewImage: "/img/certificates/yandex-cup-2020.jpg",
    description:
      "Школа разработки интерфейсов Яндекс",
    instruments: ["ES5+"],
  }
]