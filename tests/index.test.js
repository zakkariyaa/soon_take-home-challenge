import { equal, test } from './test-helpers.js';

// -----------------------------
// END TO END TESTS

// PRODUCT PAGE
// tests for the '+' button
test('E2E test: plus button adds items to basket', () => {
  const plusBtn = document.querySelector('.plus__btn');
  const basketCount = document.querySelector('.item__count').textContent;

  plusBtn.click();

  const actual = Number(document.querySelector('.item__count').textContent);
  // edge case for numbers above 10 (our maximum stock level)
  const expected = Number(basketCount) <= 10 ? Number(basketCount) + 1 : 10;

  equal(actual, expected);

  // reset the count to 0 after test
  document.querySelector('.minus__btn').click();
});

test('E2E test: plus button increases item count', () => {
  const plusBtn = document.querySelector('.plus__btn');
  const itemCount = document.querySelector('.basket__number').textContent;

  plusBtn.click();

  const actual = Number(document.querySelector('.basket__number').textContent);
  const expected = Number(itemCount) <= 10 ? Number(itemCount) + 1 : 10;

  equal(actual, expected);

  document.querySelector('.minus__btn').click();
});

// tests for 'add-to-basket' button
test('E2E test: add to basket button adds items to basket', () => {
  const addToBasketBtn = document.querySelector('.add__btn');
  const basketCount = document.querySelector('.item__count').textContent;

  addToBasketBtn.click();

  const actual = Number(document.querySelector('.item__count').textContent);
  const expected = Number(basketCount) <= 10 ? Number(basketCount) + 1 : 10;

  equal(actual, expected);

  document.querySelector('.minus__btn').click();
});

test('E2E test: add to basket button increases item count', () => {
  const addToBasketBtn = document.querySelector('.add__btn');
  const itemCount = document.querySelector('.basket__number').textContent;

  addToBasketBtn.click();

  const actual = Number(document.querySelector('.basket__number').textContent);
  const expected = Number(itemCount) <= 10 ? Number(itemCount) + 1 : 10;

  equal(actual, expected);

  document.querySelector('.minus__btn').click();
});

// tests for the '-' button
test('E2E test: minus button removes items from the basket', () => {
  const plusBtn = document.querySelector('.plus__btn');
  plusBtn.click();

  const minusBtn = document.querySelector('.minus__btn');
  const basketCount = document.querySelector('.item__count').textContent;
  minusBtn.click();

  const actual = Number(document.querySelector('.item__count').textContent);
  const expected = Number(basketCount) <= 0 ? Number(basketCount) - 1 : 0;

  equal(actual, expected);
});

test('E2E test: minus button dicreases item count', () => {
  const plusBtn = document.querySelector('.plus__btn');
  plusBtn.click();

  const minusBtn = document.querySelector('.minus__btn');
  const itemCount = document.querySelector('.basket__number').textContent;
  minusBtn.click();

  const actual = Number(document.querySelector('.basket__number').textContent);
  const expected = Number(itemCount) <= 0 ? Number(itemCount) - 1 : 0;

  equal(actual, expected);
});

// CHECKOUT PAGE
// test for the basket icon
// test('E2E test: basket icon displays the checkout page', () => {
//   const basketIcon = document.querySelector('.basket');
//   basketIcon.click();

//   const section = document.querySelector('header').nextElementSibling.classList;
//   const sectionName = section[section.length - 1];

//   equal(sectionName, 'checkout__section');
// });

// tests for '+' checkout button
// test('E2E test: checkout plus button updates total and subtotal', () => {
//   const basketIcon = document.querySelector('.basket');
//   basketIcon.click();

//   const plusBtn = document.querySelector('.plus__btn');

//   const totalEl = document
//     .querySelector('.total')
//     .textContent.split('.')[0]
//     .split('£')[1];

//   const subtotalEl = document
//     .querySelector('.subtotal')
//     .textContent.split('.')[0]
//     .split('£')[1];

//   const total = totalEl === subtotalEl ? totalEl : null;

//   plusBtn.click();

//   const actual = Number(
//     document.querySelector('.total').textContent.split('.')[0].split('£')[1]
//   );
//   const expected = Number(total + 650);

//   equal(actual, expected);

//   // reset the count to 0 after test
//   document.querySelector('.minus__btn').click();
// });

// tests for '+' checkout button
// test('E2E test: checkout plus button updates total and subtotal', () => {
//   const plusBtn = document.querySelector('.plus__btn');

//   const totalEl = document
//     .querySelector('.total')
//     .textContent.split('.')[0]
//     .split('£')[1];

//   const subtotalEl = document
//     .querySelector('.subtotal')
//     .textContent.split('.')[0]
//     .split('£')[1];

//   const total = totalEl === subtotalEl ? totalEl : null;

//   plusBtn.click();

//   const actual = Number(
//     document.querySelector('.total').textContent.split('.')[0].split('£')[1]
//   );
//   const expected = Number(total + 650);

//   equal(actual, expected);

//   // reset the count to 0 after test
//   document.querySelector('.minus__btn').click();
// });
