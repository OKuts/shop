export const closePopUp = () => {
    const overlay = <HTMLElement>document.getElementById('overlay');
    const loginForm = <HTMLElement>document.getElementById('loginForm');
    overlay.classList.remove('visible');
    loginForm.classList.remove('popup-show');
};
