var counterOne = 9;
var counterTwo = 12;
var counterThree =9;

var counterOneElement = document.querySelector("#counterOne");

function add1() {
    counterOne++;
    counterOneElement.innerText = counterOne;
    console.log(counterOne);
}

var counterTwoElement = document.querySelector("#counterTwo");

function add1more() {
    counterTwo++;
    counterTwoElement.innerText = counterTwo;
    console.log(counterTwo);
}


var counterThreeElement = document.querySelector("#counterThree");

function add1moretime() {
    counterThree++;
    counterThreeElement.innerText = counterThree;
    console.log(counterThree);
}
