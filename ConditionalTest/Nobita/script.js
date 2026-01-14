function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
/*function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}*/

function startAutoMove() {
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 4) + 1;

        switch (randomNumber) {
            case 1:
                upArrowPressed();
                break;
            case 2:
                downArrowPressed();
                break;
            case 3:
                leftArrowPressed();
                break;
            case 4:
                rightArrowPressed();
                break;
        }
    }, 10); 
}
window.onload = startAutoMove();