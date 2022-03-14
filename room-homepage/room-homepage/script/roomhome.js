const Contents = {
    paragraph:{
        title:"Discover innovative ways to decorate",
        description:
        ` We provide unmatched quality, comfort,
         and style for property owners across the country 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`

    },
    paragraphone:{
        title:"We are available all across the globe",
        description:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    },
    paragraphtwo:{
        title:"Manufactured with the best materials",
        description:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
}
let intialslide = 0;
let slideHead = document.getElementById('title');
let slidecontent = document.getElementById('paragraph');
let Bgimage = document.getElementById('bgimage');
let slidelength = 2;
let navbar = document.getElementById('navigationarea');
let list = document.getElementById('lst');
let Mobilemenu = document.getElementById('menu');
Mobilemenu.addEventListener('click',function(){
    list.classList.toggle("display");
    console.log(Mobilemenu.src);
    var img1 = "file:///D:/Htmlrepo/AngularNode/room-homepage/room-homepage/images/icon-hamburger.svg";
    var img2 = "file:///D:/Htmlrepo/AngularNode/room-homepage/room-homepage/images/icon-close.svg";
    if(Mobilemenu.src == img1)
    {
        console.log("hai");
        Mobilemenu.src = "./images/icon-close.svg";
    }
    else if(Mobilemenu.src == img2){
        Mobilemenu.src = "./images/icon-hamburger.svg";

    }
})


function plusSlides(index)
{
    intialslide += index;
    slideChange(intialslide);
}
function slideChange(event)
{
    if(event == 0)
    {
        slideHead.innerHTML = Contents.paragraph.title;
        slidecontent.innerHTML = Contents.paragraph.description;
        Bgimage.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')";

    }
    else if(event == 1)
    {
        slideHead.innerHTML = Contents.paragraphone.title;
        slidecontent.innerHTML = Contents.paragraphone.description;
        Bgimage.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')";
    }
    else if(event == 2)
    {
        slideHead.innerHTML= Contents.paragraphtwo.title;
        slidecontent.innerHTML = Contents.paragraphtwo.description;
        Bgimage.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')";

    }
    else
    {
        console.log('content Empty');
    }
}

let initial = 0;
let Autoslide = setInterval(function()
{
    if(initial == slidelength)
    {
        initial = 0;

    }
    else{
        console.log(slidelength);
        slideChange(initial);
        initial+=1;

    }
  
},2000);


