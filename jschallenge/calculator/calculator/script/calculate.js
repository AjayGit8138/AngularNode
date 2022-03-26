function inputdisplay(buttonid) {
    var setEmpty = document.getElementById('hidetitle');
    console.log(setEmpty);
    setEmpty.classList.add('text');
    var displayNum = document.getElementById('display').innerHTML;
    var concatNum = document.getElementById('display');

    concatNum.innerHTML = `${displayNum}` + `${buttonid}`;
    console.log(buttonid);
}
function equals() {
    var exp = document.getElementById('display').innerHTML;
    console.log(exp);
    var result = eval(exp);
    console.log(result);
    var setresult = document.getElementById('ans');
    setresult.innerHTML = `Ans: ${result}`;
}
function reset() {
    window.location.reload();
}
function deleteback() {
    var exp = document.getElementById('display').innerHTML;
    var reduce = exp.slice(0, -1);
    var length = reduce.length;
    var exp = document.getElementById('display');
    exp.innerHTML = reduce;
    console.log(exp.innerHTML);


}
function themetwo() {
    var theme = document.getElementById('modechange');
    theme.classList.remove("themeone");
    theme.classList.remove("themethree");
    theme.classList.add("themetwo");
}
function themeone() {
    var theme = document.getElementById('modechange');
    theme.classList.remove("themetwo");
    theme.classList.remove("themethree");

    theme.classList.add("themeone");
}
function themethree() {
    var theme = document.getElementById('modechange');
    theme.classList.remove("themetwo");
    theme.classList.remove("themeone");

    theme.classList.add("themethree");
}