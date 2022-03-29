

export const getCoords = (elem: HTMLElement) => {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.scrollY,
    left: box.left + window.scrollX
  };
}