import { updateItemCount } from './updateItemCount.js';

const body = document.querySelector('body');
const productSection = document.querySelector('.product__section');

let itemCount;

export function displayCheckout() {
  itemCount = document.querySelector('.basket__number').textContent;
  const basket = document.querySelector('.basket');

  const template = document.querySelector('#checkout__template');
  const domFragment = template.content.cloneNode(true);

  // dynamically update values
  const itemCountEl = document.querySelector('.item__count');
  const basketNumber = domFragment.querySelector('.basket__number');
  const totalEl = domFragment.querySelector('.total');
  const subtotalEl = domFragment.querySelector('.subtotal');

  itemCountEl.textContent = itemCount;
  basketNumber.textContent = itemCount;
  totalEl.textContent = `£${(itemCount * 650).toFixed(2)}`;
  subtotalEl.textContent = `£${(itemCount * 650).toFixed(2)}`;

  body.replaceChild(domFragment, productSection);
  basket.removeEventListener('click', displayCheckout);

  // make buttons (+, -, checkout...) functional
  const minusBtn = document.querySelector('.minus__btn');
  const plusBtn = document.querySelector('.plus__btn');
  const checkoutBtn = document.querySelector('.checkout__btn');

  // prettier-ignore
  updateItemCount(
    [plusBtn],
    ['add', 'checkout', basketNumber, itemCountEl, plusBtn, minusBtn, checkoutBtn]
  );

  // prettier-ignore
  updateItemCount(
    [minusBtn],
    ['remove', 'checkout', basketNumber, itemCountEl, plusBtn, minusBtn, checkoutBtn]
  );
}
