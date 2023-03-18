import { changeElementState } from './changeElementState.js';
import { updatePrice } from './updatePrice.js';

const stockLevel = 10;
let itemCount = 0;

export function updateElement(args) {
  const action = args[0];
  const page = args[1];
  const elements = args.slice(2);

  if (action === 'add' && itemCount < stockLevel) {
    itemCount += 1;
    updatePrice(itemCount);
  }

  if (action === 'remove' && !(itemCount <= 0)) {
    itemCount -= 1;
    updatePrice(itemCount);
  }

  if (itemCount === 0) {
    changeElementState(elements[1], 'inactive', 'active');
    changeElementState(elements[3], 'inactive__basket', 'active__basket');

    if (page === 'checkout') {
      elements[4].style.backgroundColor = '#bfbfbf';
      document.querySelector('.product__image-checkout').style.opacity = '0.2';
      // prettier-ignore
      document.querySelector('.product__calculation-price').style.opacity = '0.2';
    }
  }

  if (itemCount > 0) {
    changeElementState(elements[1], 'active', 'inactive');
    changeElementState(elements[3], 'active__basket', 'inactive__basket');

    if (page === 'checkout') {
      elements[4].style.backgroundColor = '#3f51b5';
      document.querySelector('.product__image-checkout').style.opacity = '1';
      // prettier-ignore
      document.querySelector('.product__calculation-price').style.opacity = '1';
    }
  }

  if (itemCount === 10) {
    page === 'product'
      ? changeElementState(elements[4], 'inactive', 'active')
      : null;
    changeElementState(elements[2], 'inactive__basket', 'active__basket');
  }

  if (itemCount < 10) {
    changeElementState(elements[4], 'active', 'inactive');
    changeElementState(elements[2], 'active__basket', 'inactive__basket');
  }

  elements[0].textContent = itemCount;
  elements[1].textContent = itemCount;
}
