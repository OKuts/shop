const reviewFormElement = <HTMLFormElement>document.getElementById('review');
const name = <HTMLInputElement>reviewFormElement.querySelector('input');
const pros = <HTMLTextAreaElement>reviewFormElement.querySelector('textarea[name=pros]');
const cons = <HTMLTextAreaElement>reviewFormElement.querySelector('textarea[name=cons]');
const outBtn = <HTMLInputElement>reviewFormElement.querySelector('input[type=submit]');

export const isFormReviewValid = () => {
    const out = Boolean(name.value.trim() && (pros.value.trim() || cons.value.trim()));
    out ? outBtn.removeAttribute('disabled') : outBtn.setAttribute('disabled', '');

    return out;
};
