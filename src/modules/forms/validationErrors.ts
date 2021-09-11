import { IYupErrors } from '../../pages/index/scripts/types';

export const resetValidationErrors = (element: HTMLDivElement) => {
    const errorDiv = element;
    errorDiv.innerHTML = '';
};

export const setValidationErrors = (errors: IYupErrors[], element: HTMLDivElement) => {
    const errorDiv = element;
    resetValidationErrors(errorDiv);
    for (const errorElement of errors) {
        const { message } = errorElement;
        errorDiv.innerHTML += `<p>${message}</p>`;
    }
};
