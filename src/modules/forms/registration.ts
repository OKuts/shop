import toastr from 'toastr';

import { registrationSchema } from './registrationSchema';
import {
    api,
    IRegistrationBodyModel,
} from '../index';
import { setValidationErrors, resetValidationErrors } from './validationErrors';

const registrationErrorMessages = <HTMLDivElement>document.getElementById('registrationErrorMessages');

export const registration = async (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const payload = {
        name,
        email,
        password,
    };

    try {
        await registrationSchema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setValidationErrors(error.inner, registrationErrorMessages);
        }

        return null;
    }
    try {
        const data = await api.registration(<IRegistrationBodyModel>payload);
        if (data) {
            toastr.info(
                `${name}. Необходимо выполнить вход. registration`,
                'Регистрация успешна.',
            );
        }
    } catch (error) {
        toastr.error(error.message, 'Ошибка регистрации. registration');

        return null;
    }

    resetValidationErrors(registrationErrorMessages);
};
