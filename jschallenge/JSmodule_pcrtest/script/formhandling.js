import { pcrcollection,insertrecord } from "./collection.js";
import { searchval,resetform } from "./eventdriven.js";
import { finding } from "./searchval.js";
import { formvalid } from "./validation.js";
import { setcity } from "./setcity.js";

setcity();

var count = 1;
var storelocal = `personform`+`${count}`;
console.log(storelocal);

var submitdata = document.getElementById("submitdata");
submitdata.addEventListener('click',function(e){
    e.preventDefault();
    var booleantrue = formvalid();
    console.log(booleantrue);
    if(booleantrue == false)
    {
    var form = document.getElementById('myform');
    var data = new FormData(form);
    var array = new Array();
 

    for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
         pcrcollection[key] = value;
         array[key] = value;
    
      }
      console.log(array);
      console.log(pcrcollection);
      var printval = Object.values(pcrcollection);
      insertrecord(printval);
      document.getElementById('myform').reset();
      count++;
    }
    else{
        console.log("form error");
    }
})

searchval.addEventListener("click",function(){
    console.log("Hai");
    var input = document.getElementById("findval");
    console.log(input.value);
    var showOutput = document.getElementById("resulttable");
    showOutput.classList.toggle("outputtable");
    finding(input.value);
})

resetform.addEventListener('click',()=>{
    document.getElementById('myform').reset();

})



