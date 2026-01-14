function result(){

    let bmi = parseFloat(document.getElementById('bmi').value);

    let options = ["under", "normal", "over", "obese"];

    options.forEach(id =>{
        document.getElementById(id).style.backgroundColor ="";
        document.getElementById(id).style.color = "";
    });

    let target = "";

    if (bmi < 18.5) {
        target = "under";
    } else if (bmi < 25.0) {
        target = "normal";
    } else if (bmi < 30.0) {
        target = "over";
    } else {
        target = "obese";
    }

    if (target){
        let changes = document.getElementById(target);
        changes.style.backgroundColor = "red";
        changes.style.color = "white";
    }
}