export const changeElementState = (el, addClass, removeClass) => {
  el.classList.add(addClass);
  el.classList.remove(removeClass);
};
