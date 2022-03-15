let Navbar = document.getElementById('menu');
let Menulist = document.getElementById('lst');
Navbar.addEventListener('click',function(){
    Menulist.classList.toggle("mobilemenu");
    console.log("Hai");
})
function colorchange(changediv) {
    var opacityset = document.getElementById('opacityimg').getElementsByTagName('img');
     changediv.style.opacity = "1";
    var element = document.getElementById('pimg');
    element.src = changediv.src;
    for(var i=0;i<=4;i++)
    {
        if(changediv.src)
        {
            changediv.style.opacity = "1";
            console.log("Hai");
            opacityset[i].style.opacity = "0.5";
            console.log(i);
        }
       
    }
    
}
function increament() {
    var Qty = document.getElementById('qty').innerText;
    var count = parseInt(Qty);
    console.log(Qty);
    count += 1;
    document.getElementById('qty').innerHTML = count;
}
function decreament() {
    var Qty = document.getElementById('qty').innerText;
    var count = parseInt(Qty);
    console.log(Qty);
    count -= 1;
    if (count > 0) {
        document.getElementById('qty').innerHTML = count;
    }
}
function buyproduct(pid, tqty) {
    var Productname = pid.innerHTML;
    var Torder = tqty.innerHTML;
    console.log(Productname);
    console.log(Torder);
    var Prodprice = document.getElementById('oriprice').innerHTML;
    console.log(Prodprice);
    var Prodprs = parseFloat(Prodprice);
    var Tcost = Torder * (Prodprs * 100);
    console.log(Tcost);
    var prsdollar = Tcost * (0.01);
    console.log(prsdollar);
    var Ctitle = document.getElementById('prd');
    Ctitle.innerHTML = Productname;
    document.getElementById('cprs').innerHTML = `$${Prodprs}`;
    document.getElementById('cqty').innerHTML = `x${Torder}`;
    document.getElementById('ctotal').innerHTML = `$${prsdollar}`;
    var RemoveEmpty = document.getElementById('empty');
    RemoveEmpty.classList.add("empty-one");

    var setImage = document.getElementById('setdelete');
    setImage.src = "./images/icon-delete.svg";

}
function cartdisplay() {
    console.log('hi');
    var purchase = document.getElementById('purchase');

    purchase.classList.toggle("checkout-none");
}
function popup() {
    var Popup = document.getElementById('thumbnails');
    Popup.classList.add("thumbnails");
    var close = document.getElementById('close');
    close.src = "./images/icon-close.svg";
    close.style.display = "block";
}
function closepopup() {
    var ClosePopup = document.getElementById('thumbnails');
    ClosePopup.classList.remove("thumbnails");
    var close = document.getElementById('close');
    close.style.display = "none";
}