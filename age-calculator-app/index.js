const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const dayOutput = document.getElementById('dayOutput');
const monthOutput = document.getElementById('monthOutput');
const yearOutput = document.getElementById('yearOutput');
const submitBtn = document.getElementById('btn');
const formLabel = document.getElementsByClassName("label");
const allInput = document.getElementsByClassName('input');
const error101 = document.getElementsByClassName('error101');
const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');

let dayValue = dayInput.value;
let monthValue = monthInput.value;
let yearValue = yearInput.value;

let dayValid = 31;
let validMonth = 12;
let today = new Date();
let validYear = today.getFullYear();

submitBtn.addEventListener('click', function() {


    dayIncorrect();

    emptyInput();

});

function emptyInput() {
    if ((dayInput.value == "") && (monthInput.value == "") & (yearInput.value == "")) {
        console .log('Input is empty');

       for (let i = 0; i < allInput.length; i++) {
        allInput[i].style.borderColor = 'red';
       }

       for (let i = 0; i < error101.length; i++) {
        error101[i].textContent = "This field is required";
    }
    }
}

function dayIncorrect() {
    let dayValid = 31;

    if (dayInput.value <= dayValid) {
        dayError.textContent = "";
    } else if (dayInput.value > dayValid) {
        dayError.textContent = 'Must be a valid day';
        console.log('date is wrong');
    }
}