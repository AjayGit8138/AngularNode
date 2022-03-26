export function calculate() {
    let exchageval = Math.random();
    let x = document.forms["myForm"]["currency"].value;
    let y = document.forms["myForm"]["toconversion"].value;
    let input = document.forms["myForm"]["inputval"].value;
    let output = Math.floor((exchageval * input)*10000);
    document.getElementById('converted').value = `$${output}`;
  }