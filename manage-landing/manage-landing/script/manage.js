const Mobilemenu = document.getElementById('menu');
Mobilemenu.addEventListener('click',function(){
    var lst = document.getElementById('lst');
    lst.classList.toggle('display');
    var img1 = "file:///D:/Htmlrepo/AngularNode/manage-landing/manage-landing/images/icon-hamburger.svg";
    var img2 = "file:///D:/Htmlrepo/AngularNode/manage-landing/manage-landing/images/icon-close.svg";
    var img3 = "https://html-lessons-six.vercel.app/manage-landing/manage-landing/images/icon-hamburger.svg";
    var img4 = "https://html-lessons-six.vercel.app/manage-landing/manage-landing/images/icon-close.svg";
    if(Mobilemenu.src == img1 || Mobilemenu.src == img3)
    {
        console.log("hai");
        Mobilemenu.src = "./images/icon-close.svg";
    }
    else if(Mobilemenu.src == img2 || Mobilemenu.src == img4){
        Mobilemenu.src = "./images/icon-hamburger.svg";

    }

})
var testimonialsection = document.getElementsByClassName("testimonials");

var y = window.matchMedia("(max-width: 752px)");
var x = window.matchMedia("(max-width: 750px)");
myFunction(x,y);
x.addListener(myFunction);
y.addListener(myFunction);

function myFunction(x,y) {
  if (x.matches) { 
    showSlides();
    console.log("if condition");
  }
  else if(window.matchMedia("(max-width: 752px)")){
   
   console.log("elsecondition");
  }
}


let length;
let slideIndex = 0;
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}


function showSlides() {
  var i;
  var slideshow = document.getElementsByClassName("testimonialcard");
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slideshow.length)
   {
       slideIndex = 1
   }
  slideshow[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}



function emailvalidation()
{
  var femail = document.myForm.femail;
  var erremail = document.getElementById('erremail');
  var email = document.getElementById('emailconfirmation');
  if (Email(femail.value)) {
    email.style.border = "1px solid black";
    erremail.style.display = "none";

}
else {
    var email = document.getElementById('emailconfirmation');
    email.style.border = "1px solid red";
    var erremail = document.getElementById('erremail');
    erremail.innerHTML = "Enter a valid email Address";
}
}

function Email(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
  