import '../../../css/index.css';
import '../../../css/style.css';
import '../../../css/index.scss';

import toastr from 'toastr';

import { getProfile, setLoginStatus, storage } from '../../../modules';
import { order, showOrder, changeShowOrderTotalCount } from '../../../modules/order';
import { loadProducts } from './modules';
import { ISubmitEvent } from './types';
import { login, registration } from '../../../modules/forms';

const overlay = <HTMLElement>document.getElementById('overlay');
const loginForm = <HTMLElement>document.getElementById('loginForm');
const registrationForm = <HTMLElement>document.getElementById('regPane');
const loginBtn = <HTMLButtonElement>document.getElementById('loginBtn');
const logoutBtn = <HTMLButtonElement>document.getElementById('logoutBtn');
const orderElement = <HTMLDivElement>document.getElementById('order');
const cards = <HTMLDivElement>document.getElementById('cards');

const token = storage.getToken();

export const closePopUp = () => {
    overlay.classList.remove('visible');
    loginForm.classList.remove('popup-show');
};

loginBtn.onclick = () => {
    setLoginStatus('on');
};

logoutBtn.onclick = () => {
    setLoginStatus('off');
    location.reload();
};

if (token) {
    getProfile();
    loadProducts(token);
    const orderFromStorage  = storage.getOrder();
    if (orderFromStorage) {
        order.setOrderFromStorage(orderFromStorage);
        changeShowOrderTotalCount();
    }
} else {
    toastr.info('Для работы с приложением необходимо зарегистрироваться или войти.');
}

cards.onclick = (event) => {
    event.preventDefault();
    const onClickEvent = event as unknown as ISubmitEvent;
    if (storage.getToken()) {
        const element =  onClickEvent.target;
        const { parentElement } = element;
        let href = element.getAttribute('href');
        if (!href) href = parentElement ? parentElement.getAttribute('href') : null;
        if (href) {
            const hash = href.slice(href.lastIndexOf('=') + 1);
            location.href = `gadget-page.html?hash=${hash}`;
        }
    }
};

orderElement.onclick = () => {
    if (order.getOrderTotalCount()) showOrder();
};

loginForm.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    login(formData);
    closePopUp();
};

registrationForm.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    registration(formData);
    closePopUp();
};
