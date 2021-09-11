import toastr from 'toastr';
import { api } from '../../../modules';
import { getOrderData } from '../../../modules/order';


export const deleteReview = async (token: string, hash: string, reviewHash: string) => {
    try {
        const data = await api.deleteReview(token, hash, reviewHash);
        if (data) {
            getOrderData(hash, token);
            toastr.info(
                'Ваш отзыв успешно удален.',
                'Отзывы.',
            );
            getOrderData(hash, token);
        }
    } catch (error) {
        toastr.error(
            `${error.message}`,
            'Ошибка.',
        );
    }
};
