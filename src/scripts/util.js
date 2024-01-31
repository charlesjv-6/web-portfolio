// currency formatter to Philippine Peso
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP"
});

// currency calculator 
// origin is the currency to be converted to the new currency
// amount is the amount of the origin currency
const changeCurrency = (originCurrency, newCurrency, amount) => {
    const conversionRates = {
        USD: {
            PHP: 50, // 1 USD = 50 PHP
            EUR: 0.85, // 1 USD = 0.85 EUR
            JPY: 110, // 1 USD = 110 JPY
            KRW: 1200, // 1 USD = 1200 KRW
            CNY: 6.5 // 1 USD = 6.5 CNY
        },
        EUR: {
            USD: 1.18, // 1 EUR = 1.18 USD
            PHP: 58, // 1 EUR = 58 PHP
            JPY: 130, // 1 EUR = 130 JPY
            KRW: 1400, // 1 EUR = 1400 KRW
            CNY: 7.5 // 1 EUR = 7.5 CNY
        },
        PHP: {
            USD: 0.02, // 1 PHP = 0.02 USD
            EUR: 0.017, // 1 PHP = 0.017 EUR
            JPY: 2.2, // 1 PHP = 2.2 JPY
            KRW: 24, // 1 PHP = 24 KRW
            CNY: 0.13 // 1 PHP = 0.13 CNY
        },
        JPY: {
            USD: 0.0091, // 1 JPY = 0.0091 USD
            EUR: 0.0077, // 1 JPY = 0.0077 EUR
            PHP: 0.45, // 1 JPY = 0.45 PHP
            KRW: 11, // 1 JPY = 11 KRW
            CNY: 0.058 // 1 JPY = 0.058 CNY
        },
        KRW: {
            USD: 0.00083, // 1 KRW = 0.00083 USD
            EUR: 0.00071, // 1 KRW = 0.00071 EUR
            PHP: 0.041, // 1 KRW = 0.041 PHP
            JPY: 0.090, // 1 KRW = 0.090 JPY
            CNY: 0.0054 // 1 KRW = 0.0054 CNY
        },
        CNY: {
            USD: 0.15, // 1 CNY = 0.15 USD
            EUR: 0.13, // 1 CNY = 0.13 EUR
            PHP: 7.7, // 1 CNY = 7.7 PHP
            JPY: 17, // 1 CNY = 17 JPY
            KRW: 185 // 1 CNY = 185 KRW
        }
    };    

    if (originCurrency === newCurrency) {
        return currencyFormatter.format(amount); // No conversion needed, return formatted amount
    }

    if (conversionRates[originCurrency] && conversionRates[originCurrency][newCurrency]) {
        const convertedAmount = amount * conversionRates[originCurrency][newCurrency];
        return currencyFormatter.format(convertedAmount);
    } else {
        return "Conversion rate not available";
    }
}

// will calculate the year lapse
const yearsSince = dateString => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - givenDate.getFullYear();

    const postfix = `year${yearsPassed > 1 ? 's' : ''}`;
    return yearsPassed + ' ' + postfix;
};

// truncates a string then add an elipsis at the end
const trunctateString = ( maxLength, text ) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};

export { 
    currencyFormatter, 
    yearsSince, 
    trunctateString,
    changeCurrency
};