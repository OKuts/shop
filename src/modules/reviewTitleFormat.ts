export const reviewTitleFormat = (count: number) => {
    let out = 'Нет отзывов';
    if (count > 4)  {
        out = `${count} отзывов`;
    } else if (count > 2) {
        out = `${count} отзывa`;
    } else if (count === 1) out = '1 отзыв';

    return `${out}`;
};
