const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default currencyFormatter;
