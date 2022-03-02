function calculatetip(percent)
{
    const Pcnt = (percent)/ 100;
    const Cbill = document.getElementById('getbill').value;
    const tip = Cbill*Pcnt;
    const TipEval = Cbill * (1+Pcnt);
    const ByPerson = document.getElementById('Tperson').value;
    const TotalPersonamt = (TipEval / ByPerson);
    document.getElementById('totperson').innerHTML = `$${TotalPersonamt.toFixed(3)}`;
    document.getElementById('tipamt').innerHTML = `$${tip/ByPerson}`;
    console.log(TotalPersonamt);
    console.log(TipEval); 
    console.log(Pcnt); 

}
function reset()
{
    window.location.reload();
}