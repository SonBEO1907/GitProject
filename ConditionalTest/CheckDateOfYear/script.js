function returnDays(){
    month = parseFloat(document.getElementById('month').value);

    let evenMonth = [4,6,9,11];
    let oddMonth = [1,3,4,7,8,10,12];

    if (evenMonth.includes(month)){
        document.getElementById('result').innerHTML =
        `<p> Tháng ${month} có 30 ngày</p> `;
    } else if (oddMonth.includes(month)){
        document.getElementById('result').innerHTML =
        `<p> Tháng ${month} có 31 ngày</p> `;
    } else {
        document.getElementById('result').innerHTML =
        `<p> Tháng ${month} có 28 hoặc 29 ngày</p> `;
    }
}