import toastr from 'toastr';

import { order, changeShowOrderData, changeShowOrderTotalCount } from '.';
import { ISubmitEvent } from '../../pages/index/scripts/types';
import { storage } from '../storage/storage';

const showBuyPanel = (isShow: boolean, goods: HTMLElement) => {
    const overlay = <HTMLElement>document.getElementById('overlay');

    if (isShow) {
        overlay.classList.add('visible');
        goods.classList.add('popup-show');
    } else {
        overlay.classList.remove('visible');
        goods.classList.remove('popup-show');
    }
};

export const showOrder = () => {
    const goods = <HTMLElement>document.getElementById('goods');
    const closeGoods = <HTMLElement>goods.querySelector('#closeGoods');
    const sendOrder = <HTMLElement>goods.querySelector('#sendOrder');
    const goodItems = <HTMLElement>goods.querySelector('#goodItems');

    closeGoods.onclick = () => showBuyPanel(false, goods);

    sendOrder.onclick = () => {
        order.cleanOrder();
        storage.removeOrder();
        changeShowOrderTotalCount();
        showBuyPanel(false, goods);
        toastr.success(
            'Прекрасный выбор.',
            'Наши поздравления.',
        );
    };

    goodItems.onclick = (event) => {
        const onClickEvent = event as unknown as ISubmitEvent;
        const element = onClickEvent.target;
        if (element.dataset.hash) {
            order.deleteOrderItem(element.dataset.hash);
            storage.saveOrder(order.getOrder());
            changeShowOrderData(goods, goodItems);
            changeShowOrderTotalCount();
            if (!order.getOrderTotalCount()) showBuyPanel(false, goods);
        }
    };

    showBuyPanel(true, goods);
    changeShowOrderData(goods, goodItems);
};
