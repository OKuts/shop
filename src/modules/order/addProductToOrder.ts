import toastr from 'toastr';
import { api, storage } from '../index';
import { changeShowOrderTotalCount, order, TOrder } from '.';

export const addProductToOrder = async (token: string, hash: string) => {
    try {
        const { data } = await api.loadProductData(token, hash);
        toastr.info('Товар добавлен в корзину.');
        const { name, price } = data;
        const payload: TOrder = { name, price, count: 1 };
        order.addToOrder(hash, payload);
        storage.saveOrder(order.getOrder());
        changeShowOrderTotalCount();
    } catch (error) {
        toastr.info(error.message, 'Ошибка');
    }
};
