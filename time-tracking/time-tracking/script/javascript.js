
let TimeData = new Object();
TimeData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
  
const file = "D:/javascriptdesign/time-tracking/time-tracking/data.json";
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