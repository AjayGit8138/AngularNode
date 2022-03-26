let changeMode = document.getElementById('selectorbar');
changeMode.addEventListener("click", function () {

    var monthlyRating = document.getElementsByTagName('h3');
    var yearlyRating = document.getElementsByTagName('h4');
    console.log(monthlyRating);
    console.log(yearlyRating);
    var i;
    var n;

    for (i = 0; i < monthlyRating.length; i++) {
        for (n = 0; n < 3; n++) {
            console.log(monthlyRating[i].innerHTML);
            if (monthlyRating[i].style.display === "none") {
                console.log(monthlyRating[i].innerHTML);
                monthlyRating[i].style.display = "block";
                yearlyRating[i].style.display = "none";
                changeMode.style.justifyContent = "flex-end"
            }
            else {
                monthlyRating[i].style.display = "none";
                yearlyRating[i].style.display = "block";
                changeMode.style.justifyContent = "flex-start"
            }
        }
    }
})
