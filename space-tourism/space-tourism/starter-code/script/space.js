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
    let distance = document.getElementById('distance');
    let timeset = document.getElementById('time');
    let setplanet = document.getElementById('planetimg');
    let bio = document.getElementById('bio');
    let activeslide = document.getElementById('findlength').getElementsByClassName('circle');
    var slidelength = document.getElementById('findlength').getElementsByTagName('li').length;
    let menubar = document.getElementById('menu');
    let listmenu = document.getElementById('slideval');
    console.log(slidelength);

    menubar.addEventListener('click',function(){
        var img1 = "file:///D:/Htmlrepo/AngularNode/space-tourism/space-tourism/starter-code/shared/icon-hamburger.svg";
        var img2 = "file:///D:/Htmlrepo/AngularNode/space-tourism/space-tourism/starter-code/shared/icon-close.svg";
        var img3 = "https://html-lessons-six.vercel.app/space-tourism/space-tourism/starter-code/shared/icon-hamburger.svg";
        var img4 = "https://html-lessons-six.vercel.app/space-tourism/space-tourism/starter-code/shared/icon-close.svg";
        console.log(menubar.src);
        if(menubar.src === img1 || menubar.src === img3)
        {
            menubar.src = "./shared/icon-close.svg";
        }
        else if(menubar.src === img2 || menubar.src === img4){
            menubar.src = "./shared/icon-hamburger.svg";
        }
        listmenu.classList.toggle('display');
    })

    var initial = 0;
    var crewslide = 0;
    var autoslide = setInterval(function()
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
    distance.innerHTML = setSpace[currentpagename][event].distance;
    timeset.innerHTML = setSpace[currentpagename][event].travel;
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
        activeslide[event].classList.toggle("active");
       
    }
}


function setpagename(pagename)
{
    currentpagename = pagename;
    console.log(`setSpace` + `.${currentpagename}`);
    tempval = `setSpace` + `.${currentpagename}`;
    console.log(tempval);

}


