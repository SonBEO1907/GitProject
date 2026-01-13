function calculateGrade(){
    let math = parseFloat(document.getElementById('mathGrade').value);
    let physic = parseFloat(document.getElementById('physicGrade').value);
    let bio = parseFloat(document.getElementById('bioGrade').value);

    if (isNaN(math) || isNaN (physic) || isNaN (bio)){
        alert("Incorrect Number Format");
        return;
    } else {
        let total = math + physic + bio;
        let average = total /3.
        document.getElementById('gradeResult').innerHTML = `
            <br>
            <p>Total: ${total}</p>
            <p>Average: ${average}</p>
        `;
    }
}

function convert(){
    let c = parseFloat(document.getElementById('c').value);
    if (isNaN(c)){
        alert("Incorrect Number Format");
        return;
    }
    let f = (c * 1.8) + 32;
    document.getElementById('convertResult').innerHTML = `
    <br>
    <p>To F: ${f}</p>
    `;
    
}

function circleCal(){
    let r = parseFloat(document.getElementById('radius').value);
    if (isNaN(r)){
        alert("Incorrect Number Format");
        return; 
    }
    let c = Math.PI * r*2;
    let s = Math.PI * r*r;
    document.getElementById('circleResult').innerHTML = `
    <br>
    <p>C: ${c.toFixed(2)}</p>
    <p>S: ${s.toFixed(2)}</p>
    `;

}

//const f = (c * 1.8) + 32;