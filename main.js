import { updateItemCount } from './helpers/updateItemCount.js';
import { displayCheckout } from './helpers/displayCheckout.js';

const addToBasketBtn = document.querySelector('.add__btn');
const minusBtn = document.querySelector('.minus__btn');
const plusBtn = document.querySelector('.plus__btn');
const basketNumber = document.querySelector('.basket__number');
const itemCountEl = document.querySelector('.item__count');
const basketIcon = document.querySelector('.basket');

// ------------------------------
// product section
// prettier-ignore
updateItemCount(
  [addToBasketBtn, plusBtn],
  ['add', 'product', basketNumber, itemCountEl, plusBtn, minusBtn, addToBasketBtn]
);
// prettier-ignore
updateItemCount(
  [minusBtn],
  ['remove', 'product', basketNumber, itemCountEl, plusBtn, minusBtn, addToBasketBtn]
);

// ------------------------------
// checkout section
basketIcon.addEventListener('click', displayCheckout);
