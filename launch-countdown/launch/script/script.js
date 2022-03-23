const count = () => {
    const endDate = new Date("March 30,2022 08:15:35");
    console.log(endDate);
    const now = new Date().getTime();
    console.log(now);
    const difference = endDate - now;
    console.log(difference);

    var seconds = 1000;
    var min = seconds * 60;
    var hrs = min * 60;
    var days = hrs * 24;

    var launchdate = Math.floor(Difference / days);
    var launchrs = Math.floor((Difference % days) / hrs);
    var launchmin = Math.floor((Difference % hrs) / min);
    var launchsec = Math.floor((Difference % min) / seconds);
    console.log(launchdate);
    console.log(launchrs);
    console.log(launchmin);
    console.log(launchsec);

    document.getElementById('days').innerHTML = launchdate;
    document.getElementById('hrs').innerHTML = launchrs;
    document.getElementById('minutes').innerHTML = launchmin;
    document.getElementById('seconds').innerHTML = launchsec;
}
setInterval(count, 1000);