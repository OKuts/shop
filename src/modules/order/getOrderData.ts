// import { order } from '.';
import { api } from '../api/api';
import { IGetOneProductResponse } from '../types';
import { showOneProduct } from '../../pages/add-gadget/scripts/modules/showOneProduct';

export const getOrderData = (hash: string, token: string) => {
    if (token) {
        const data = api.loadProductData(token, hash);
        data.then((product: IGetOneProductResponse) => {
            showOneProduct(product);

            return null;
        }).catch((error) => console.log(error.message));
    }
};
