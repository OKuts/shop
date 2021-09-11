export const isValidNewProductForm = (formInputs: HTMLInputElement[], formSubmitBtn: HTMLInputElement) => {
    const errors: boolean[] = [];
    formInputs.forEach((item, i) => {
        if (item.getAttribute('myType') === 'number') {
            if (isNaN(Number(item.value)) || item.value.trim() === '') {
                errors.push(false);
            } else errors.push(true);
        } else if (!item.value.trim()) {
            errors.push(false);
        } else errors.push(true);
        const color = item;
        color.style.borderColor = errors[i] ? 'inherit' : 'red';
    });
    const isValid = errors.every((item:boolean) => item);
    isValid
        ? formSubmitBtn.removeAttribute('disabled')
        : formSubmitBtn.setAttribute('disabled', '');

    return isValid;
};
