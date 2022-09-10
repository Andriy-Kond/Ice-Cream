
// Дінамічно бере висоту .header і робить з неї padding-top для Body. Необїідно для фіксації меню вгорі.
const { height: pageHeaderHeight } = document
  .querySelector(".header")
  .getBoundingClientRect();
document.body.style.paddingTop = `${pageHeaderHeight}px`;