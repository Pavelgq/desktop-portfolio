import { globalConfig } from "../config";


export const getCoords = (elem: HTMLElement) => {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.scrollY,
    left: box.left + window.scrollX
  };
}

export const checkMobile = (clietnWidth: number) => {
  if (clietnWidth < globalConfig.mobileMaxWidth) {
    return true;
  }
  return false;
}