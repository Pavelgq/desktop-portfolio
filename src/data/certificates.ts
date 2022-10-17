import { PortfolioItemI } from "../interfaces/portfolio";

export const certificatesData: PortfolioItemI[] = [
  {
    id: 1,
    name: "Школа разработки интерфейсов Яндекс ",
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
      `Школа включает два этапа: обучение и работа над проектами. На первом этапе необходимо слушать лекции и делать задания в достаточно интенсивном режиме. 
      Во втором этапе необходимо собрать команду разработки, организовать работу и за 3 недели реализовать проект MVP.`,
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
      "Состоит из трех этапов: тренировочный, квалификация и финал. Требуется решить, как можно больше заданий за отведенное время",
    instruments: ["ES5+"],
  }
]