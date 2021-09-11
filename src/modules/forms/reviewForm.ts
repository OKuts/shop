import toastr from 'toastr';
import { IReviewForm } from '../types';
import { api } from '../api/api';
import { getOrderData } from '../order';

export const reviewForm = async (formData: FormData, token: string, hash: string) => {

    const payload: IReviewForm = {
        name: String(formData.get('name')),
        pros: String(formData.get('pros')),
        cons: String(formData.get('cons')),
    };
    try {
        const data = await api.review(<IReviewForm>payload, token, hash);
        if (data) {
            toastr.info(
                'Ваш отзыв успешно добавлен.',
                'Отзывы.',
            );
            getOrderData(hash, token);
        }
    } catch (error)  {
        toastr.error(
            `${error.message}`,
            'Ошибка.',
        );
    }
};
