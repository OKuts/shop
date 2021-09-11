import { IGetProductsResponse } from './index';
import { reviewTitleFormat } from './reviewTitleFormat';

export const showCardFromServer = (products: IGetProductsResponse) => {
    return products.data.reduce((acu: string, item) =>
        `${acu}
        <a href="gadget-page.html?hash=${item.hash}" class="item_card">
            <img src="img/item-image-02.png" class="card_cover" alt="Item image">
            <p class="item_category">${item.category}</p>
            <p class="item_name">${item.name}</p>
            <p class="item_price">${item.price}$</p>
            <p class="item_comments"> ${Array.isArray(item.reviews) && reviewTitleFormat(item.reviews.length)}</p>
        </a>
    `, '');
};
