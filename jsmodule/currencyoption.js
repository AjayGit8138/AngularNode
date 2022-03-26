import { currencies } from "./handler.js";
export function setcurrencies()
{
  var count = 0;
  for(var x in currencies)
  { 
      console.log(count);
      console.log(currencies[x]);
      var select = document.getElementById('toconversion');
        var option = document.createElement('option');
        var optionone = document.createElement('option');
        var title = Object.keys(currencies);

        console.log(title);
        option.text =   `${title[count]}:`+ currencies[x];
        option.setAttribute('value',title[count]);
       
        optionone.setAttribute('value',title[count]);
        optionone.text =  `${title[count]}:`+ currencies[x];
        
        select.appendChild(option)
        var selectoption = document.getElementById('money');
        selectoption.appendChild(optionone);
        count++;
  }
}