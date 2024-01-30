// currency formatter
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP"
});

const yearsSince = dateString => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - givenDate.getFullYear();

    const postfix = `year${yearsPassed > 1 ? 's' : ''}`;
    return yearsPassed + ' ' + postfix;
};

const trunctateString = ( maxLength, text ) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};

export { currencyFormatter, yearsSince, trunctateString };