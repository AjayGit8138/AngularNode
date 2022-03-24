function calculatetip(percent)
{
    const pcnt = (percent)/ 100;
    const cbill = document.getElementById('getbill').value;
    const tip = cbill*pcnt;
    const tipEval = cbill * (1+pcnt);
    const byPerson = document.getElementById('Tperson').value;
    const totalPersonamt = (tipEval / byPerson);
    document.getElementById('totperson').innerHTML = `$${totalPersonamt.toFixed(3)}`;
    document.getElementById('tipamt').innerHTML = `$${tip/byPerson}`;
    console.log(totalPersonamt);
    console.log(tipEval); 
    console.log(pcnt); 

    var buttn = document.getElementById('btncol');
    buttn.classList.remove("active");

}
function reset()
{
    window.location.reload();
}