import { ModalDataI } from "../interfaces/common";
import { ReactComponent as BigKeyIcon } from "../assets/svg/big-key.svg";
import { ReactComponent as DeathStarIcon } from "../assets/svg/icons/death-star.svg";

type AlarmsType = {
  'empty': ModalDataI,
  'fixed': ModalDataI,
  'inWork': ModalDataI,
  'defence': ModalDataI
};



export const alarms: AlarmsType = {
  'empty': {
    title: '',
    content: '',
  },
  'fixed': {
    title: 'На ремонте',
    content: 'Тут что-то сломалось. В скором времени я постараюсь все исправить.',
    Icon: BigKeyIcon,
  },
  'inWork': {
    title: 'В работе',
    content: 'Пока этот функционал недоступен, но я работаю над реализацией.'
  },
  'defence': {
    title: 'Защищено',
    content: 'К сожалению, меня попросили не показывать данный ресурс. Приношу извинения.',
    Icon: DeathStarIcon

  },

}

export type AlarmNamesType = keyof AlarmsType;