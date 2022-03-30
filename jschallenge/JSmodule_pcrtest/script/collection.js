import { table } from "./eventdriven.js";

export const pcrcollection = {};
var count = 1;
var value = `personform`+`${count}`;

export function insertrecord(valuesdata) {
  console.log(valuesdata);
  console.log(count);
  var i = 0;
      var row = table.insertRow(count);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);


cell1.innerHTML = valuesdata[i++];
cell2.innerHTML = valuesdata[i++];
cell3.innerHTML = valuesdata[i++];
cell4.innerHTML = valuesdata[i++];
cell5.innerHTML = valuesdata[i++];
cell6.innerHTML = valuesdata[i++];
cell7.innerHTML = valuesdata[i++];
cell8.innerHTML = valuesdata[i++];
cell9.innerHTML = valuesdata[i++];
cell10.innerHTML = valuesdata[i++];
count++;
}
   
      
  
 
