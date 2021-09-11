import '../../../css/style.css';
import '../../../css/add-gadget.css';
import '../../../css/index.scss';

import { changeShowInOutButton, getProfile,  storage } from '../../../modules';
import { ISubmitEvent } from '../../index/scripts/types';
import { createNewProduct } from './modules/createNewProduct';
import { isValidNewProductForm } from './modules/isValidNewProductForm';

const logoutBtn = <HTMLButtonElement>document.getElementById('logoutBtn');

const form = <HTMLFormElement>document.getElementById('form');
const formInputs = <HTMLInputElement[]>[...form.querySelectorAll('input[type=text]')];
const formSubmitBtn = <HTMLInputElement>form.querySelector('input[type=submit]');

logoutBtn.onclick = () => {
    storage.cleanStorage();
    changeShowInOutButton('off');
    location.href = 'index.html';
};

let isValid = false;

form.onsubmit = (event) => {
    event.preventDefault();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    if (isValid) createNewProduct(formData);
};

form.oninput = () => {
    isValid = isValidNewProductForm(formInputs, formSubmitBtn);
};

if (storage.getToken()) getProfile();
