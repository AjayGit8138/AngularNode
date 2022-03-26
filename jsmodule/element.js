import { setcurrencies } from "./currencyoption.js";
import { calculate } from "./currencyconversion.js";



function setmoney()
{
    console.log("Function call from element.jsfile");
    setcurrencies();
}
window.setmoney = setmoney;


var listen = document.getElementById('inputvalue');
console.log(listen);
listen.addEventListener("change",function(){
    calculate();
})
// var dropdown = document.getElementById('money');
// dropdown.addEventListener("mouseover",function(){
//     // var droplength = document.getElementById('money').options.length;
//          document.getElementById('money').size = '5';
// })

// var tochange = document.getElementById('toconversion');
// tochange.addEventListener("mouseover",function(){
//     var droplength = document.getElementById('toconversion').options.length;
//         document.getElementById('toconversion').size = droplength;
// })
        







