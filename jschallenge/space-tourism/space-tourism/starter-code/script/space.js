let currentpagename;
let tempval;
var setSpace = new Object(); 
 setSpace = {
    "destinations": [
      {
        "name": "Moon",
        "images": {
          "png": "./assets/destination/image-moon.png",
          "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "name": "Mars",
        "images": {
          "png": "./assets/destination/image-mars.png",
          "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "name": "Europa",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ],
    "crew": [
      {
        "name": "Douglas Hurley",
        "images": {
          "png": "./assets/crew/image-douglas-hurley.png",
          "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "images": {
          "png": "./assets/crew/image-mark-shuttleworth.png",
          "webp": "./assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "images": {
          "png": "./assets/crew/image-victor-glover.png",
          "webp": "./assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "images": {
          "png": "./assets/crew/image-anousheh-ansari.png",
          "webp": "./assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
    ],
    "technology": [
      {
        "name": "Launch vehicle",
        "images": {
          "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      },
      {
        "name": "Spaceport",
        "images": {
          "portrait": "./assets/technology/image-spaceport-portrait.jpg",
          "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      {
        "name": "Space capsule",
        "images": {
          "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
          "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }
    ]
  };
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


