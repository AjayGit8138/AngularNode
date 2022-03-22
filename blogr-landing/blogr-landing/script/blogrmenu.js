let menubar = document.getElementById('menu');
    let list = document.getElementById('lst');
    menubar.addEventListener('click', function () {
        list.classList.toggle("display");
        console.log("hai");
        console.log(menubar.src);
        var img1 = "file:///D:/Htmlrepo/AngularNode/blogr-landing/blogr-landing/images/icon-hamburger.svg";
        var img2 = "file:///D:/Htmlrepo/AngularNode/blogr-landing/blogr-landing/images/icon-close.svg";
        var img3 = "https://html-lessons-six.vercel.app/blogr-landing/blogr-landing/images/icon-hamburger.svg";
        var img4 = "https://html-lessons-six.vercel.app/blogr-landing/blogr-landing/images/icon-close.svg";
        if (menubar.src == img1 || menubar.src == img3) {
            console.log("hai");
            menubar.src = "./images/icon-close.svg";
        }
        else if (menubar.src == img2 || menubar.src == img4) {
            menubar.src = "./images/icon-hamburger.svg";

        }
    })