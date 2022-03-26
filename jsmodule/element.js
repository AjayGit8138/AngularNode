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





