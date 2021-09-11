import toastr from 'toastr';

import { loginSchema } from './loginSchema';
import { setValidationErrors } from './validationErrors';

import {
    api, storage,
    ILoginBodyModel,
} from '../index';
import { getProfile } from '../getProfile';
import { loadProducts } from '../../pages/index/scripts/modules';

export const login = async (formData: FormData) => {
    const loginErrorMessages = <HTMLDivElement>document.getElementById('loginErrorMessages');
    const email = formData.get('email');
    const password = formData.get('password');

    const payload = {
        email,
        password,
    };
    try {
        await loginSchema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setValidationErrors(error.inner, loginErrorMessages);
        }

        return null;
    }

    try {
        const data = await api.login(<ILoginBodyModel>payload);
        storage.saveToken(data.data);
        toastr.info('Добро пожаловать. Login');
        getProfile();
        loadProducts(data.data);
        // setTimeout(() => loadProducts(data.data), 2000);
    } catch (error) {
        toastr.error(
            `${error.message}`,
            'Ошибка авторизации login',
        );

        return null;
    }
};
