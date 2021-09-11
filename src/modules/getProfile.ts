import toastr from 'toastr';
import { changeShowInOutButton, api, storage } from '.';

export const getProfile = async () => {
    const token = storage.getToken();
    if (token) {
        const profileName = <HTMLElement>document.getElementById('profileName');
        try {
            const { data } = await api.profile(token);
            profileName.textContent = data.name;
            changeShowInOutButton('on');
        } catch (error) {
            toastr.info(error.message, 'Ошибка getProfile');
        }
    }
};
