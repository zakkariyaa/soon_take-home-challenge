import { changeElementState } from './changeElementState.js';
import { updatePrice } from './updatePrice.js';

const stockLevel = 10;
let itemCount = 0;

export function updateElement(args) {
  const action = args[0];
  const elements = args.slice(1);

  if (action === 'add' && itemCount < stockLevel) {
    itemCount += 1;
    updatePrice(itemCount);
  }

  if (action === 'remove' && !(itemCount <= 0)) {
    itemCount -= 1;
    updatePrice(itemCount);
  }

  if (itemCount === 0) {
    changeElementState('inactive', elements[1], 'inactive', 'active');
    // prettier-ignore
    changeElementState('inactive', elements[3], 'inactive__basket', 'active__basket');
  }

  if (itemCount > 0) {
    changeElementState('active', elements[1], 'active', 'inactive');
    // prettier-ignore
    changeElementState('active', elements[3], 'active__basket', 'inactive__basket')
  }

  if (itemCount === 10) {
    changeElementState('inactive', elements[4], 'inactive', 'active');
    // prettier-ignore
    changeElementState('inactive', elements[2], 'inactive__basket', 'active__basket');
  }

  if (itemCount < 10) {
    changeElementState('active', elements[4], 'active', 'inactive');
    // prettier-ignore
    changeElementState('active', elements[2], 'active__basket', 'inactive__basket');
  }

  elements[0].textContent = itemCount;
  elements[1].textContent = itemCount;
}
