var menudisplay = document.getElementById('menu');
    menudisplay.addEventListener('click', function () {
        var list = document.getElementById('lst');
        console.log(menudisplay.src);
        var menuDiv = document.getElementById('lstmenu');
        menuDiv.classList.toggle("listmenuone");
        var img1 = "file:///D:/Htmlrepo/AngularNode/sunnyside-agency/sunnyside-agency/images/menu-icon-13.png";
        var img2 = "file:///D:/Htmlrepo/AngularNode/sunnyside-agency/sunnyside-agency/images/close.png";
        var img3 = "https://html-lessons-six.vercel.app/sunnyside-agency/sunnyside-agency/images/menu-icon-13.png";
        var img4 = "https://html-lessons-six.vercel.app/sunnyside-agency/sunnyside-agency/images/close.png";
        if (menudisplay.src === img1 || menudisplay.src === img3) {
            menudisplay.src = "./images/close.png";
        }
        else if (menudisplay.src === img2 || menudisplay.src === img4) {
            menudisplay.src = "./images/menu-icon-13.png";
        }
        else {
            console.log("do nothing");
        }

        if (list.style.display === "block") {
            console.log("if");
            var x = window.matchMedia("(max-width: 893px)")
            myFunction(x)
            x.addListener(myFunction)
        }
        else {
            list.style.display = "block";
            console.log("else");
        }
        menuDiv.style.display = "block";
        function myFunction(x) {
            if (x.matches) {
                document.body.style.display = "black";
                console.log("hai");
                list.style.display = "none";
            } else {
                list.style.display = "block";
            }
        }
    })