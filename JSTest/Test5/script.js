function validation(){
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    if (isNaN(a) || isNaN (b)){
        alert("Incorrect Number Format");
        return;
    }
    return {a , b}
}

function printResult(r){
        document.getElementById('result').innerHTML =
        `
        <p> Result: ${r} <p>
        `;
}

function add(){
    let data = validation();
    let result = data.a + data.b;
    printResult(result)
}

function sub(){
    let data = validation();
    let result = data.a - data.b;
    printResult(result);
}

function mul(){
    let data = validation();
    let result = data.a * data.b;
    printResult(result);
}

function div(){
    let data = validation();
    let result = data.a / data.b;
    printResult(result);
}