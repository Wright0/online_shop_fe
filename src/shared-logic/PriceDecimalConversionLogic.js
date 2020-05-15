export function displayPriceWithDecimals(price){
    const priceInDollars = price/100;
    return Number.parseFloat(priceInDollars).toFixed(2);
}

export function returnStringPriceToNumber(price){
    const priceInPennies = parseFloat(price);
    return priceInPennies * 100;
}