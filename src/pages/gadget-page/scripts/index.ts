import '../../../css/style.css';
import '../../../css/gadget-page.css';
import '../../../css/index.scss';

import { getProfile, setLoginStatus, storage  } from '../../../modules';
import {
    changeShowOrderTotalCount, order, showOrder, getOrderData, addProductToOrder,
} from '../../../modules/order';
import { isFormReviewValid } from './isFormReviewValid';
import { ISubmitEvent } from '../../index/scripts/types';
import { reviewForm } from '../../../modules/forms';
import { deleteReview } from './deleteReview';

const token = storage.getToken();
const hash: string = location.href.slice(location.href.lastIndexOf('=') + 1);

const loginBtn = <HTMLButtonElement>document.getElementById('loginBtn');
const logoutBtn = <HTMLButtonElement>document.getElementById('logoutBtn');
const addToOrder = <HTMLButtonElement>document.getElementById('addToOrder');
const orderElement = <HTMLDivElement>document.getElementById('order');
const characteristics = <HTMLElement>document.getElementById('characteristics');
const reviews = <HTMLElement>document.getElementById('reviews');
const characteristicsPane = <HTMLElement>document.getElementById('characteristicsPane');
const reviewsPane = <HTMLElement>document.getElementById('reviewsPane');
const userReviews = <HTMLElement>document.getElementById('userReviews');
const reviewFormElement = <HTMLFormElement>document.getElementById('review');

let isValid = false;

reviewFormElement.onsubmit = (event) => {
    event.preventDefault();

    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    if (token && isValid) {
        reviewForm(formData, token, hash);
        reviewFormElement.reset();
    }
};

reviewFormElement.oninput = () => {
    isValid = isFormReviewValid();
};

characteristics.onclick = () => {
    characteristics.classList.add('active');
    reviews.classList.remove('active');
    characteristicsPane.classList.add('show');
    reviewsPane.classList.remove('show');
};

reviews.onclick = () => {
    characteristics.classList.remove('active');
    reviews.classList.add('active');
    characteristicsPane.classList.remove('show');
    reviewsPane.classList.add('show');
};

loginBtn.onclick = () => setLoginStatus('on');

logoutBtn.onclick = () => {
    setLoginStatus('off');
    location.href = 'index.html';
};

addToOrder.onclick = () => {
    if (hash && token) addProductToOrder(token, hash);
};

orderElement.onclick = () => {
    if (order.getOrderTotalCount()) showOrder();
};

userReviews.onclick = (event) => {
    const onClickEvent = event as unknown as ISubmitEvent;
    const element =  onClickEvent.target;
    const reviewHash = element.dataset.hash;
    if (reviewHash && token) {
        deleteReview(token, hash, reviewHash);
        // if (hash && token) getOrderData(hash, token);
    }
};

if (token) getProfile();
if (hash && token) getOrderData(hash, token);

const orderFromStorage  = storage.getOrder();

if (orderFromStorage) {
    order.setOrderFromStorage(orderFromStorage);
    changeShowOrderTotalCount();
}