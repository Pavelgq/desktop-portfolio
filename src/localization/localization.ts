export interface localizationI {
  ru: {[key: string]: any},
  eng: {[key: string]: any}
}

export const localization: localizationI = {
  ru: {
    welcome: {
      hello: "Приветствую! Меня зовут Павел.",
      shortAbout: [`Я `, `фронтенд разработчик `, `из Санкт-Петербурга. `, 
      `Этот сайт создан для того, чтобы расказать обо мне подробее.`],
      instruction: "Пользуясь этим сайтом думайте, как в своей операционной системе"
    },
    resume: {
      title: "Резюме_Гордеев.pdf",
      anchor: {
        skils: 'Навыки',
        about: 'О себе',
        experience: 'Опыт работы',
        education: 'Образование',
        courses: 'Курсы',
        additionally: 'Дополнительно',
      }
    }
  },
  eng: {
    welcome: {
      hello: "Hello! My name is Pavel",
      shortAbout: [`I'm `, `frontend developer `, `with fullstack elements. `, 
      `This site was created to tell you more about me.`],
      instructions: "When using this site, think like in your operating system."
    },
    resume: {
      title: "Resume_Gordeev.pdf",
      anchor: {
        skils: 'Skills',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        courses: 'Courses',
        additionally: 'Other',
      }
    }
  },
};