function setval(value) {
    let priceset = document.getElementById('price');
    let getval = document.getElementById('rangevalue').value;
    priceset.innerHTML = getval;
    console.log(value);
}