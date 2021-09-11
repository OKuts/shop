import { order } from '.';

export const changeShowOrderTotalCount = () => {
    const orderCount = document.getElementById('orderCount');
    const count = order.getOrderTotalCount() || '';
    if (orderCount) orderCount.textContent = String(count);
};
