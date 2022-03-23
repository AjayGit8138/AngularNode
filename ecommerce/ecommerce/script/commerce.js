let navbar = document.getElementById('menu');
let menulist = document.getElementById('lst');
navbar.addEventListener('click',function(){
    menulist.classList.toggle("mobilemenu");
    console.log("Hai");
})
function colorchange(changediv) {
    var opacityset = document.getElementById('opacityimg').getElementsByTagName('img');
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
    var qty = document.getElementById('qty').innerText;
    var count = parseInt(qty);
    console.log(qty);
    count += 1;
    document.getElementById('qty').innerHTML = count;
}
function decreament() {
    var qty = document.getElementById('qty').innerText;
    var count = parseInt(qty);
    console.log(qty);
    count -= 1;
    if (count > 0) {
        document.getElementById('qty').innerHTML = count;
    }
}
function buyproduct(pid, tqty) {
    var productname = pid.innerHTML;
    var torder = tqty.innerHTML;
    console.log(productname);
    console.log(torder);
    var prodprice = document.getElementById('oriprice').innerHTML;
    console.log(prodprice);
    var prodprs = parseFloat(prodprice);
    var tcost = torder * (prodprs * 100);
    console.log(tcost);
    var prsdollar = tcost * (0.01);
    console.log(prsdollar);
    var ctitle = document.getElementById('prd');
    ctitle.innerHTML = productname;
    document.getElementById('cprs').innerHTML = `$${prodprs}`;
    document.getElementById('cqty').innerHTML = `x${torder}`;
    document.getElementById('ctotal').innerHTML = `$${prsdollar}`;
    var removeEmpty = document.getElementById('empty');
    removeEmpty.classList.add("empty-one");

    var setImage = document.getElementById('setdelete');
    setImage.src = "./images/icon-delete.svg";

}
function cartdisplay() {
    console.log('hi');
    var purchase = document.getElementById('purchase');

    purchase.classList.toggle("checkout-none");
}
function popup() {
    var popup = document.getElementById('thumbnails');
    popup.classList.add("thumbnails");
    var close = document.getElementById('close');
    close.src = "./images/icon-close.svg";
    close.style.display = "block";
}
function closepopup() {
    var closePopup = document.getElementById('thumbnails');
    closePopup.classList.remove("thumbnails");
    var close = document.getElementById('close');
    close.style.display = "none";
}