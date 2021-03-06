export function displayResult () {
       let currency = document.getElementById("given-input");
    
       let result =Math.floor( Math.random(currency)*10000);
    document.getElementById("result-currency").innerHTML = result;
     }
     document.getElementById("given-input").addEventListener("change", displayResult);
 
    import { displayResult } from './handlers.js';
    const currency = {
        MSG:'select a currency--',
        USD: 'United States Dollar',
        AUD: 'Australian Dollar',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        CZK: 'Czech Republic Koruna',
        DKK: 'Danish Krone',
        GBP: 'British Pound Sterling',
        HKD: 'Hong Kong Dollar',
        HRK: 'Croatian Kuna',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        RUB: 'Russian Ruble',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand',
        EUR: 'Euro',
      };
      const from = document.querySelector('[name = country]');
      const to = document.querySelector('[name = to-country]');
      const input = document.querySelector('.given-currency');
      const country = generateOptions(currency);
      from.innerHTML = country;
      to.innerHTML = country;
    
      function generateOptions(options) {
        return Object.entries(options)
          .map(
            ([currencyCode, currencyName]) =>
              // `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
              `<option value="${currencyCode}">${currencyCode == 'MSG' ? " " : currencyCode} - ${currencyName}</option>`
          );
          displayResult();
          }
    