import { IOrder } from '../order';

export const storage = Object.freeze({
    getToken() {
        const token: string | null = localStorage.getItem('jwt');

        return token;
    },

    saveToken(token: string) {
        if (token.length) {
            localStorage.setItem('jwt', token);
        }
    },

    saveOrder(payload: IOrder) {
        localStorage.setItem('order', JSON.stringify(payload));
    },

    getOrder() {
        const orderStr: string | null = localStorage.getItem('order');

        return orderStr ?  JSON.parse(orderStr) : null;
    },

    cleanStorage() {
        localStorage.clear();
    },

    removeOrder() {
        localStorage.removeItem('order');
    },
});
