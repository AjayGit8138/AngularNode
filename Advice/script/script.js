const advice = async()=>{
    const data = await fetch("https://api.adviceslip.com/advice");
    const result = await data.json();
    console.log(result);
    var id = result.slip.id;
    var quotes = result.slip.advice;
    console.log(id);
    document.getElementById('advhead').innerHTML = 'Advice #' + id;
    document.getElementById('advtips').innerHTML ='"'+ quotes+'"';

}
advice();
function changequote() 
{
    advice();
}
