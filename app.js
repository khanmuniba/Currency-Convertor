const fromAmountElement = document.querySelector(".amount");
const ConvertedAmountElement = document.querySelector(".converted-amount"); // Corrected selector
const fromCurrencyElement = document.querySelector(".from-Currency");
const toCurrencyElement = document.querySelector(".To-Currency");
const valueElement = document.querySelector(".value");

// Array to store the selected tags with these countries
const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "INR", name: "Indian Rupee" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "ZAR", name: "South African Rand" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "DKK", name: "Danish Krone" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "RON", name: "Romanian Leu" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "COP", name: "Colombian Peso" },
    { code: "PEN", name: "Peruvian Sol" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "MAD", name: "Moroccan Dirham" }
];

// Display currency options from the array to select tags
countries.forEach(country => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
    
    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);
});

// Set default values after the loop
fromCurrencyElement.value = "USD";
toCurrencyElement.value = "PKR";



// Get exchange data from API
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
    valueElement.textContent="Fetching Exchange Rate";
    const response = await fetch(`https://v6.exchangerate-api.com/v6/6b616aec167f1c0878666153/latest/${fromCurrency}`);
    const data = await response.json();

    const conversionRate = data.conversion_rates[toCurrency];
    const convertedAmount = amount * conversionRate;
    ConvertedAmountElement.value = convertedAmount.toFixed(2);  // Formatting to 2 decimal places
    valueElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
};
// fetching exchange rate when user input the amount
fromAmountElement.addEventListener('input', getExchangeRate);
// fetching exchange rate when user change currency
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);  // Ensure lowercase 'load'
