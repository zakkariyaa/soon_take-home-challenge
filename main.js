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
updateItemCount(
  [addToBasketBtn, plusBtn],
  ['add', basketNumber, itemCountEl, plusBtn, minusBtn, addToBasketBtn]
);

updateItemCount(
  [minusBtn],
  ['remove', basketNumber, itemCountEl, plusBtn, minusBtn, addToBasketBtn]
);

// ------------------------------
// checkout section
basketIcon.addEventListener('click', displayCheckout);
