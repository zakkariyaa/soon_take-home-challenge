export const updatePrice = (itemCount) => {
  const totalEl = document.querySelector('.total');
  const subtotalEl = document.querySelector('.subtotal');

  if (totalEl && subtotalEl) {
    totalEl.textContent = `£${(itemCount * 650).toFixed(2)}`;
    subtotalEl.textContent = `£${(itemCount * 650).toFixed(2)}`;
  }
};
