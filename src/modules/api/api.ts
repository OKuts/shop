import axios from 'axios';

import {
    IRegistrationBodyModel,
    IRegistrationResponse,
    ILoginBodyModel,
    IProductModel,
    IProfileResponse,
    IGetProductsResponse,
    IGetOneProductResponse,
    IReviewForm,
} from '../types';

const API_URL = 'https://lab.lectrum.io/js2/api/zavidovo';

export const api = Object.freeze({
    registration: async (credentials: IRegistrationBodyModel): Promise<IRegistrationResponse> => {
        const { data } = await axios.post(`${API_URL}/register`, credentials);

        return data;
    },

    login: async (credentials: ILoginBodyModel): Promise<IRegistrationResponse> => {
        const { data } = await axios.post(`${API_URL}/login`, credentials);

        return data;
    },

    auth: async (token: string) => {
        const { data } = await axios.get(`${API_URL}/auth`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },

    profile: async (token: string): Promise<IProfileResponse> => {
        const { data } = await axios.get(`${API_URL}/profile`,
            {
                headers: {
                    'x-token': token,
                },
            });

        return data;
    },

    // eslint-disable-next-line max-len
    createProduct: async (product: IProductModel, token: string): Promise<IGetOneProductResponse> => {
        const { data } = await axios.post(`${API_URL}/products`, product, {
            headers: {
                'x-token': token,
            },
        });

        return data;
    },

    loadProducts: async (token: string): Promise<IGetProductsResponse> => {
        const { data } = await axios.get(`${API_URL}/products`, {
            headers: {
                'x-token': token,
            },
        });

        return data;
    },

    loadProductData: async (token: string, hash: string): Promise<IGetOneProductResponse> => {
        const { data } = await axios.get(`${API_URL}/products/${hash}`, {
            headers: {
                'x-token': token,
            },
        });

        return data;
    },

    review: async (review: IReviewForm, token: string, hash: string)
    : Promise<IGetOneProductResponse> => {
        const { data } = await axios.post(`${API_URL}/products/${hash}/reviews`, review, {
            headers: {
                'x-token': token,
            },
        });

        return data;
    },

    deleteReview: async (token: string, hash: string, reviewHash: string) => {
        const { data } = await axios.delete(`${API_URL}/products/${hash}/reviews/${reviewHash}`, {
            headers: {
                'x-token': token,
            },
        });

        return data;
    },
});
