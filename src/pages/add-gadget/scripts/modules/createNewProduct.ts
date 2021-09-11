import toastr from 'toastr';

import {
    api,
    storage,
    IProductModel,
} from '../../../../modules';

export const createNewProduct = async (formData: FormData) => {
    const payload: IProductModel = {
        name: String(formData.get('naming')),
        category: 'phones',
        price: Number(formData.get('price')),
        characteristics: {
            memory: Number(formData.get('memory')),
            colors: [String(formData.get('color'))],
            processor: String(formData.get('processor')),
            graphics: String(formData.get('graphics')),
            brightness: Number(formData.get('brightness')),
            contrast: String(formData.get('contrast')),
            matrix: Number(formData.get('matrix')),
            cameras: Number(formData.get('cameras')),
        },
    };

    const token = storage.getToken();
    if (token) {
        try {
            const { data } = await api.createProduct(payload, token);
            if (data) {
                toastr.options.onCloseClick = function () {
                    location.href = 'index.html';
                };
                toastr.success(
                    `Гаджет ${data.name} добавлен.`,
                    'Добавление гаджета.',
                    {
                        timeOut: 5000,
                        closeButton: true,
                    },
                );

                setTimeout(() => {
                    location.href = 'index.html';
                }, 5000);
            }
        } catch (error) {
            toastr.error(error.message, 'Ошибка.');
        }
    }
};
