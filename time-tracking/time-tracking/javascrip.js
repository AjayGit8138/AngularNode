
// let http = new XMLHttpRequest();
// http.open('get','data.json',true);
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200)
//     var data = JSON.parse(this.responseText);
// }
let TimeData = new Object();
const URL =
  "https://raw.githubusercontent.com/Fernando0654/Fernando0654/main/data.timeTracking.json";
  
function getconnection()
{
    var UpdateData = document.getElementsByClassName('header');
    var length = UpdateData.length;
    console.log(UpdateData);
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET","D:/Htmlrepo/AngularNode/time-tracking/time-tracking/data.json",false);
    // xmlhttp.send();
    // if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    // {
    //     var result = xmlhttp.responseText;
    //     console.log(result);
    // }
    // fetch(URL)
    // .then((res) => res.json()){
    //     console.log(res);
    // }

    // fetch(URL)
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);
    //     TimeData = data;
    //     console.log(data[0].timeframes.daily);
    // });

}
// fetch('./data.json').then(resp=>resp.JSON()).then(jasondata=>{
//     console.log(jasondata);
// })


function templatechange(timetrack)
{
    // console.log(timetrack);
    // var mydata = JSON.parse(data);
    // console.log(mydata);
    
     fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        TimeData = data;
        console.log(TimeData[0].timeframes.weekly);
        var UpdateData = document.getElementsByTagName('h1');
        var Previous = document.getElementsByTagName('p');
        var length = UpdateData.length;
        if(timetrack == 'Daily')
        {
            
            for(var i=0;i<length;i++)
            {
                // var head = document.createElement("h1");
                UpdateData[i].innerHTML = TimeData[i].timeframes.daily.current + 'Hrs';
                Previous[i].innerHTML = 'Last Day-' + TimeData[i].timeframes.daily.previous + 'Hrs';
                console.log(TimeData[i].timeframes.daily);
                console.log(UpdateData[i]);
            }
        }
        else if(timetrack === 'Weekly')
         {
            for(var i=0;i<length;i++)
            {
            UpdateData[i].innerHTML = TimeData[i].timeframes.weekly.current + 'Hrs';
            Previous[i].innerHTML = 'Last Week-' + TimeData[i].timeframes.weekly.previous + 'Hrs';
            }

        }
        else
         {
            for(var i=0;i<length;i++)
            {
            UpdateData[i].innerHTML = TimeData[i].timeframes.monthly.current + 'Hrs';
            Previous[i].innerHTML = 'Last Month-' + TimeData[i].timeframes.monthly.previous + 'Hrs';
            }
        }
    });
     
     
         
     
    var UpdateData = document.getElementsByClassName('header');
    var length = UpdateData.length;
    console.log(UpdateData);
    console.log(TimeData["timeframes"]);
    if(TimeData['title'] == timetrack)
    {
        console.log(TimeData[0]['title']);
    }
    else if(timetrack === 'Weekly')
    {
        console.log('else');

    }
    else
    {
         console.log('else');
    }
}