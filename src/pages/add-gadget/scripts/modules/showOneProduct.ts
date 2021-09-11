// eslint-disable-next-line import/named
import { IGetOneProductResponse, reviewTitleFormat } from '../../../../modules';

export const showOneProduct = ({ data }: IGetOneProductResponse) => {
    const main = <HTMLElement>document.getElementById('main');
    const name = <HTMLElement>main.querySelector('#name');
    const price = <HTMLElement>main.querySelector('#price');
    const memory = <HTMLElement>main.querySelector('#memory');
    const processor = <HTMLElement>main.querySelector('#processor');
    const graphics = <HTMLElement>main.querySelector('#graphics');
    const brightness = <HTMLElement>main.querySelector('#brightness');
    const contrast = <HTMLElement>main.querySelector('#contrast');
    const matrix = <HTMLElement>main.querySelector('#matrix');
    const cameras = <HTMLElement>main.querySelector('#cameras');

    const userReviews = <HTMLElement>document.getElementById('userReviews');
    const reviewTitle = <HTMLElement>document.getElementById('reviewTitle');

    name.textContent = data.name;
    price.textContent = `${String(data.price)} $`;
    memory.textContent = `${String(data.characteristics.memory)} Gb`;
    processor.textContent = data.characteristics.processor;
    graphics.textContent = data.characteristics.graphics;
    brightness.textContent = `${String(data.characteristics.brightness)} kd/м²`;
    contrast.textContent = data.characteristics.contrast;
    matrix.textContent = `${data.characteristics.matrix} Mp`;
    cameras.textContent = `${String(data.characteristics.cameras)}`;
    if (data.reviews) {
        reviewTitle.innerHTML = `<h2>${reviewTitleFormat(data.reviews.length)}</h2>`;
        userReviews.innerHTML = data.reviews.reduce((acu: string, item) =>
            `${acu}
                <article>
                    <p class="name">${item.name}
                    <img 
                        data-hash=${item.hash} 
                        src="img/icon/close-red.svg" 
                        class="close-icon" 
                        alt="Close icon"></p>     
                    <div class="feedback_info pros">
                        <p class="feedback_title">Преимущества</p>
                        <p class="feedback_content">${item.pros || '...'}</p>
                    </div>
                    <div class="feedback_info cons">
                        <p class="feedback_title">Недостатки</p>
                        <p class="feedback_content">${item.cons || '...'}</p>
                    </div>
                </article>
    `, '');
    }
};
