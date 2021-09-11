export const changeShowInOutButton = (status: string) => {
    const navHeader = <HTMLDivElement>document.getElementById('navHeader');
    const loginBtn = <HTMLButtonElement>navHeader.querySelector('#loginBtn');
    const logoutBtn = <HTMLButtonElement>navHeader.querySelector('#logoutBtn');
    const profile = <HTMLDivElement>navHeader.querySelector('#profile');
    const addGadgetLink = <HTMLElement>navHeader.querySelector('#addGadgetLink');
    const order = <HTMLElement>navHeader.querySelector('#order');
    const editButton = <HTMLButtonElement>document.getElementById('editButton');
    // console.log(loginBtn, logoutBtn, profile, addGadgetLink, order, editButton);
    if (editButton) {
        status === 'on' ? editButton.classList.remove('hidden') : editButton.classList.add('hidden');
    };
    if (status === 'on') {
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        profile.classList.remove('hidden');
        addGadgetLink && addGadgetLink.classList.remove('hidden');
        order && order.classList.remove('hidden');
    } else {
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        profile.classList.add('hidden');
        addGadgetLink && addGadgetLink.classList.add('hidden');
        order && order.classList.add('hidden');
    }
};
