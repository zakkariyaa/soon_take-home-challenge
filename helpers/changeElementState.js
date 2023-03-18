export const changeElementState = (action, el, addClass, removeClass) => {
  if (action === 'active') {
    el.classList.add(addClass);
    el.classList.remove(removeClass);
  } else {
    el.classList.add(addClass);
    el.classList.remove(removeClass);
  }
};
