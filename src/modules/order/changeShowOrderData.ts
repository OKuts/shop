import { order } from './order';

export const changeShowOrderData = (goods: HTMLElement, goodItems: HTMLElement) => {
    const total = <HTMLElement>goods.querySelector('#total');
    if (total) total.textContent = String(order.getOrderTotalPrice());
    const goodsElement = goodItems;
    let str = '';
    order.getOrderNames().forEach((item) => {
        const orderItem = order.getOrder()[item];

        str += `<div class="cart_item">
                    <p class="item_name">${orderItem.name}</p>
                    <p class="item_price">${orderItem.price}</p>
                     <input type="text" class="item_count" value="${orderItem.count}">
                    <div data-hash=${item} class="control-remove">
                        <img data-hash=${item} src="img/icon/plus.svg" alt="">
                    </div>
                </div>`;
    });

    goodsElement.innerHTML = str;
};
