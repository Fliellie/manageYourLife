const number = document.getElementById("number");

let theNum = Number(localStorage.getItem("count")) || 0;

number.textContent = theNum;

function saveNumber() {

    localStorage.setItem("count", theNum);

    number.textContent = theNum;
}

function increase() {

    theNum++;

    saveNumber();
}

function decrease() {

    theNum--;

    saveNumber();
}

function reset() {

    theNum = 0;

    saveNumber();
}
function backToMain(){
    // Điều hướng quay lại file main.html nằm ở package Main
    window.location.href = "../Main/main.html";
}