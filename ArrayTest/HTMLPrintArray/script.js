let x =0;
let arr = new Array();

function getNumber(){
    let number = parseFloat(document.getElementById('number').value);

    if (isNaN(number)){
        alert('Incorrect Number Format');
        return;
    }
    return number;
}

function addElementToArray(){
    arr[x] = getNumber();
    x++;
    alert('New Number Added');
}

function printArray(){
    printString = "";
    for (i = 0; i < arr.length; i++){
        printString = printString + "<p>" + arr[i] + "</p> <br>";
    }
    document.getElementById('result').innerHTML = printString;
}