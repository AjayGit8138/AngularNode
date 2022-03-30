import { city } from "./jsobject.js";
export function setcity()
{
  var count = 0;
  for(var x in city)
  { 
      console.log(count);
      var select = document.getElementById('displaycity');
        var option = document.createElement('option');
        var title = Object.keys(city);
        console.log(title);
        option.text =   `${title[count]}:`+ city[x];
        option.setAttribute('value',city[x]);
        select.appendChild(option);
        count++;
  }
}