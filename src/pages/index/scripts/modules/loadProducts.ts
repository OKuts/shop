import toastr from 'toastr';
import { api, showCardFromServer } from '../../../../modules';

const cards = <HTMLDivElement>document.getElementById('cards');

export const loadProducts = async (token: string) => {
    if (token) {
        try {
            const data = await api.loadProducts(token);
            const cardHtml = showCardFromServer(data);
            if (cardHtml && cards) cards.innerHTML = showCardFromServer(data) + cards.innerHTML;
        } catch (error) {
            toastr.info(error.message, 'Ошибка loadProducts');
        }
    }
};
