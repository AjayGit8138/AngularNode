let currentpagename;
let tempval;
var setSpace = new Object(); 
 const URL = "https://raw.githubusercontent.com/SankThomas/space-tourism-multi-page-website/main/src/starter-code/data.json";
fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setSpace = data;
        console.log(setSpace);
    });
    let spacetitle = document.getElementById('spacehead');
    let spaceText = document.getElementById('spacepragraph');
    let Distance = document.getElementById('distance');
    let Timeset = document.getElementById('time');
    let setplanet = document.getElementById('planetimg');
    let bio = document.getElementById('bio');
    let Activeslide = document.getElementById('findlength').getElementsByClassName('circle');
    var slidelength = document.getElementById('findlength').getElementsByTagName('li').length;
    let Menubar = document.getElementById('menu');
    let Listmenu = document.getElementById('slideval');
    console.log(slidelength);

    Menubar.addEventListener('click',function(){
        var img1 = "file:///D:/Htmlrepo/AngularNode/space-tourism/space-tourism/starter-code/shared/icon-hamburger.svg";
        var img2 = "file:///D:/Htmlrepo/AngularNode/space-tourism/space-tourism/starter-code/shared/icon-close.svg";
        var img3 = "https://html-lessons-six.vercel.app/space-tourism/space-tourism/starter-code/shared/icon-hamburger.svg";
        var img4 = "https://html-lessons-six.vercel.app/space-tourism/space-tourism/starter-code/shared/icon-close.svg";
        console.log(Menubar.src);
        if(Menubar.src === img1 || Menubar.src === img3)
        {
            Menubar.src = "./shared/icon-close.svg";
        }
        else if(Menubar.src === img2 || Menubar.src === img4){
            Menubar.src = "./shared/icon-hamburger.svg";
        }
        Listmenu.classList.toggle('display');
    })

    var initial = 0;
    var crewslide = 0;
    var Autoslide = setInterval(function()
    {
        if(initial == slidelength)
        {
            initial = 0;
    
        }
        else{
            console.log(slidelength);
            slidechange(initial);
            initial+=1;
    
        }
      
    },2000);
window.onload(slidechange(0));
function plusSlides(event)
{
    initial+=event;
    slidechange(initial);
}
function slidechange(event)
{

    if(currentpagename == 'destinations')
    {
    console.log(setSpace[currentpagename][event].images.webp);
      
    spacetitle.innerHTML = setSpace[currentpagename][event].name;
    spaceText.innerHTML = setSpace[currentpagename][event].description;
    Distance.innerHTML = setSpace[currentpagename][event].distance;
    Timeset.innerHTML = setSpace[currentpagename][event].travel;
    setplanet.src = setSpace[currentpagename][event].images.webp;
    }
    else if(currentpagename == 'crew')
    {
        spacetitle.innerHTML = setSpace[currentpagename][event].name;
        bio.innerHTML = setSpace[currentpagename][event].bio;
        setplanet.src = setSpace[currentpagename][event].images.webp;

    }
    else if(currentpagename == 'technology')
    {

        spaceText.innerHTML = setSpace[currentpagename][event].description;
        console.log(spaceText.innerHTML);
         setplanet.src = setSpace[currentpagename][event].images.portrait;

        spacetitle.innerHTML = setSpace[currentpagename][event].name;
        Activeslide[event].classList.toggle("active");
       
    }
}


function setpagename(pagename)
{
    currentpagename = pagename;
    console.log(`setSpace` + `.${currentpagename}`);
    tempval = `setSpace` + `.${currentpagename}`;
    console.log(tempval);

}

