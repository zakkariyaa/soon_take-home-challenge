import { updateElement } from './updateElement.js';

export function updateItemCount(elements, args) {
  elements.forEach((el) =>
    el.addEventListener('click', () => updateElement([...args]))
  );
}
