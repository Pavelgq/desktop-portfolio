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
      instructions: "Совет: Работайте с этим сайтом, как со своей операционной системой"
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
    },
    setting: {
      title: "Настройки",
      language: {
        title: 'Выберите язык',
        items: ['русский', 'английский']
      },
      theme: {
        title: 'Выберите тему',
        items: ['светлая', 'темная']
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
    },
    setting: {
      title: "Settings",
      language: {
        title: 'Select language',
        items: ['russian', 'english']
      },
      theme: {
        title: 'Select theme',
        items: ['light', 'dark']
      }
    }
  },
};