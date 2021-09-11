import { api, storage } from '../../../modules';

const editButton = <HTMLButtonElement>document.getElementById('editButton');
const addToOrder = <HTMLButtonElement>document.getElementById('addToOrder');

export const auth = () => {
    const token = storage.getToken();
    if (token) {
        const data = api.auth(token);
        data
            .then(() => {
                editButton.classList.toggle('hidden');
                addToOrder.classList.toggle('hidden');

                return null;
            })
            .catch((error) => console.log(error.message));
    }
};
