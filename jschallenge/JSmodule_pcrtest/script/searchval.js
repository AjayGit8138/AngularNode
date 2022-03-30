import { rowDetails } from "./eventdriven.js";

export function finding(input)
{

  var count = 1;
  var k=1;

 
for(var m=0;m<rowDetails;m++)
{
  for(var g=0;g<10;g++)
  {
    console.log(count);
    var numberoftdsone =document.getElementById("displaying-data").rows[count].cells.item(g).innerHTML;

    if(numberoftdsone == input)
    {
      for(var h=0;h<10;h++)
      {
        document.getElementById("result-table").rows[1].cells.item(h).innerHTML =  document.getElementById("displaying-data").rows[count].cells.item(h).innerHTML;
      }
        console.log("value present" + numberoftdsone);
  }
  
}
count++;
}
}

