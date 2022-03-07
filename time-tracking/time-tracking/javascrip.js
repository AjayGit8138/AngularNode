
let http = new XMLHttpRequest();
http.open('get','data.json',true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200)
    var data = JSON.parse(this.responseText);
}

fetch('data.json').then(resp=>resp.JSON()).then(jasondata=>{
    console.log(jasondata);
})


function templatechange(timetrack)
{
    console.log(timetrack);
    var mydata = JSON.parse(data);
    console.log(mydata);
}