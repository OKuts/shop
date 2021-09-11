import { storage, changeShowInOutButton } from '.';
import { changeShowOrderTotalCount } from './order';

export const setLoginStatus = (status: string) => {
    const overlay = <HTMLElement>document.getElementById('overlay');
    const loginForm = <HTMLElement>document.getElementById('loginForm');
    const regPane = <HTMLElement>loginForm.querySelector('#regPane');
    const loginPane = <HTMLElement>loginForm.querySelector('#loginPane');
    const regLink = <HTMLElement>loginForm.querySelector('#regLink');
    const loginLink = <HTMLElement>loginForm.querySelector('#loginLink');
    const closeImg = <HTMLElement>loginForm.querySelector('img');

    const resetFormLinks = () => {
        loginForm.querySelectorAll('.tab_pane').forEach((el) => {
            el.classList.remove('show');
        });
    };

    regLink.onclick = () => {
        resetFormLinks();

        regPane.classList.add('show');
        regLink.classList.add('active');
        loginLink.classList.remove('active');
    };

    loginLink.onclick = () => {
        resetFormLinks();

        loginPane.classList.add('show');
        loginLink.classList.add('active');
        regLink.classList.remove('active');
    };

    closeImg.onclick = () => {
        overlay.classList.remove('visible');
        loginForm.classList.remove('popup-show');
    };

    if (status === 'on') {
        overlay.classList.add('visible');
        loginForm.classList.add('popup-show');
        changeShowOrderTotalCount();
    } else {
        storage.cleanStorage();
        changeShowInOutButton('off');
    }
};
