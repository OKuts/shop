export type TOrder = {
    name: string,
    count: number,
    price: number,
};

export interface IOrder {
    [key: string]: TOrder;
}

class Order {
    #order: IOrder = {};

    getOrder() {
        return this.#order;
    }

    setOrderFromStorage(order: IOrder) {
        this.#order = order;
    }

    getOrderNames() {
        return Object.getOwnPropertyNames(this.#order)
            ? Object.getOwnPropertyNames(this.#order) : [];
    }

    getOrderTotalCount() {
        return this.getOrderNames().reduce((acc, item) => acc + this.#order[item].count, 0);
    }

    getOrderTotalPrice() {
        return this.getOrderNames().reduce((acc, item) =>
            acc + this.#order[item].price * this.#order[item].count, 0);
    }

    addToOrder(hash: string, order: TOrder) {
        if (this.#order[hash]) {
            this.#order[hash].count += 1;
        } else {
            this.#order[hash] = order;
        }
    }

    deleteOrderItem(hash: string) {
        delete this.#order[hash];
    }

    cleanOrder() {
        this.#order = {};
    }
}

export const order = new Order();
