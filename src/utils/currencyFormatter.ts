const currencyFormatter = (
    locale: string,
    style: string,
    currency: string,
    minimumFractionDigits: number,
    maximumFractionDigits: number,
): Intl.NumberFormat => {
    return new Intl.NumberFormat(locale, {
        style: style,
        currency: currency,
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
    });
};

export default currencyFormatter;
