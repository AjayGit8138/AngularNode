import {TimeData} from './data.js';
function getconnection()
{
    var UpdateData = document.getElementsByClassName('header');
    var length = UpdateData.length;
    console.log(UpdateData);
}
function templatechange(timetrack)
{
   
    deactivate(timetrack);
     var DefaultColor = document.getElementById(timetrack);
      DefaultColor.classList.add("active");
        console.log(TimeData[0].timeframes.weekly);
        var UpdateData = document.getElementsByTagName('h1');
        var Previous = document.getElementsByTagName('p');
        var length = UpdateData.length;
        if(timetrack == 'Daily')
        {
            for(var i=0;i<length;i++)
            {
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
}
window.templatechange = templatechange;
function deactivate(timetrack)
{
    var DefaultColorweek = document.getElementById('Weekly');
    var DefaultColorMonth = document.getElementById('Monthly');
    var DefaultColorDaily = document.getElementById('Daily');
    if(timetrack == 'Daily')
    {
        DefaultColorweek.classList.remove("active");
        DefaultColorMonth.classList.remove("active");
    }
    else if(timetrack == 'Weekly'){
        DefaultColorMonth.classList.remove("active");
        DefaultColorDaily.classList.remove("active");
    }
    else if(timetrack == 'Monthly')
    {
        DefaultColorweek.classList.remove("active");
        DefaultColorDaily.classList.remove("active");
    }
    else{
        
    }
}
