function convert(){
    let from = document.getElementById('fromCurrency').value;
    let to = document.getElementById('toCurrency').value;
    let amount = parseFloat(document.getElementById('amount').value);
    var converse;
    if (isNaN(amount)){
        alert("Incorrect Number Format");
        return; 
    } else if (from === to){
        return;
    } else if (from === 'VND' && to === 'USD'){
        converse = amount / 23000;
    } else if (from === 'USD' && to  === 'VND'){
        converse = amount * 23000;
    }
    document.getElementById('display').innerHTML =
    `
        <br>
        <p> From ${from} to ${to} </p>
        <p> Conversion: ${converse} </p>
    `;
}