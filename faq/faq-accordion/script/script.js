let faq = document.getElementsByClassName('qs-tag');
let i;
let globalid;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener('click', function () {
            console.log('Hai');
            var imgid = globalid;
            console.log(imgid);
            var nextbody = this.nextElementSibling;
            if (nextbody.style.display === "block") {
                imgid.style.transform = "rotate(0deg)";
                console.log('hai');
                nextbody.style.display = "none";
            }
            else {
                imgid.style.transform = "rotate(180deg)";
                nextbody.style.display = "block";
            }
        })
}
function reverse(rev) {
    globalid = rev;
}