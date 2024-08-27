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


submitBtn.addEventListener('click', function () {

    dayIncorrect();

    monthIncorrect();
    
    yearIncorrect();

    emptyInput();


    if (dayInput.value <= dayValid && monthInput.value <= validMonth && yearInput.value <= validYear && dayInput.value != "" && monthInput.value != "" && yearInput.value != "") {

        calculateAge(dayValue, monthValue, yearValue);
    }


});

function emptyInput() {
    if ((dayInput.value == "") && (monthInput.value == "") && (yearInput.value == "")) {
        console.log('Input is empty');

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }

        for (let i = 0; i < error101.length; i++) {
            error101[i].textContent = "This field is required";
        }
    } else {
        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'hsl(0, 1%, 44%)';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'hsl(0, 0%, 86%)';
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

    for (let i = 0; i < allInput.length; i++) {
        allInput[i].style.borderColor = 'red';
    }
        
    }
}

function monthIncorrect() {
    let validMonth = 12;

    if (monthInput.value <= validMonth) {
        monthError.textContent = "";
    } else if (monthInput.value > validMonth) {
        monthError.textContent = 'Must be a valid month';
        console.log('date is wrong');

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }
}

function yearIncorrect() {
    let validYear = today.getFullYear();

    if (yearInput.value <= validYear) {
        yearError.textContent = "";
    } else if (yearInput.value > validYear) {
        yearError.textContent = 'Must be in the past';
        console.log('date is wrong');
    }
}



function calculateAge(yearValue, monthValue, dayValue) {
    yearValue = yearInput.value;
    monthValue = monthInput.value;
    dayValue = dayInput.value;
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Adding 1 because January is 0-indexed
    var currentDay = today.getDate();

    var age = currentYear - yearValue;

    // Check if the dayValue has occurred this year
    if ((monthValue != 4 || dayValue != 31) && (monthValue != 6 || dayValue != 31) && (monthValue != 9 || dayValue != 31) && (monthValue != 11 || dayValue != 31) && currentMonth < monthValue || currentMonth > monthValue && yearValue != '' || (currentMonth === monthValue && currentDay < dayValue)) {
        age--; // Subtract 1 year if the dayValue hasn't occurred yet

        //setting up animated output

        let counts = setInterval(updated);
        let upto = 0;
        function updated() {

            yearOutput.innerHTML = ++upto;
            if (upto === age) {
                clearInterval(counts);
            }
        }
    } 

    // Calculate the remaining months and days
    var birthDate = new Date(yearValue, monthValue - 1, dayValue); // Month is 0-indexed
    var yearsDifference = currentYear - yearValue;
    var monthsDifference = currentMonth - monthValue;
    var daysDifference = currentDay - dayValue;

    if (daysDifference < 0 && dayValue != '' && (monthValue != 4 || dayValue != 31) && (monthValue != 6 || dayValue != 31) && (monthValue != 9 || dayValue != 31) && (monthValue != 11 || dayValue != 31) && (monthValue != 2 || (dayValue != 29 && dayValue != 30 && dayValue != 31))) {
        monthsDifference--; // Adjust months if the current day is before the birth day
        daysDifference += daysInMonth(monthValue, yearValue);

        let counts = setInterval(updated);
        let upto = 0;
        function updated() {

            dayOutput.innerHTML = ++upto;
            if (upto === daysDifference) {
                clearInterval(counts);
            }
        }

    } else if (daysDifference > 0 && dayValue != '' && (monthValue != 4 || dayValue != 31) && (monthValue != 6 || dayValue != 31) && (monthValue != 9 || dayValue != 31) && (monthValue != 11 || dayValue != 31) && (monthValue != 2 || (dayValue != 29 && dayValue != 30 && dayValue != 31))) {
        let counts = setInterval(updated);
        let upto = 0;
        function updated() {

            dayOutput.innerHTML = ++upto;
            if (upto === daysDifference) {
                clearInterval(counts);
            }
        }
    }


    if (monthsDifference < 0 && monthValue != '' && (monthValue != 4 || dayValue != 31) && (monthValue != 6 || dayValue != 31) && (monthValue != 9 || dayValue != 31) && (monthValue != 11 || dayValue != 31) && (monthValue != 2 || (dayValue != 29 && dayValue != 30 && dayValue != 31))) {
        yearsDifference--; // Adjust years if the current month is before the birth month
        monthsDifference += 12;

        let counts = setInterval(updated);
        let upto = 0;
        function updated() {

            monthOutput.innerHTML = ++upto;
            if (upto === monthsDifference) {
                clearInterval(counts);
            }
        }

    }
    else if (monthsDifference > 0 && monthValue != '' && (monthValue != 4 || dayValue != 31) && (monthValue != 6 || dayValue != 31) && (monthValue != 9 || dayValue != 31) && (monthValue != 11 || dayValue != 31) && (monthValue != 2 || (dayValue != 29 && dayValue != 30 && dayValue != 31))) {

        let counts = setInterval(updated);
        let upto = 0;
        function updated() {

            monthOutput.innerHTML = ++upto;
            if (upto === monthsDifference) {
                clearInterval(counts);
            }
        }
    }

    //correcting April
    if (monthValue == 4 && (dayValue == 31)) {

        dayError.innerHTML = "must be a valid date";

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }

    //correcting June
    if (monthValue == 6 && (dayValue == 31)) {

        dayError.innerHTML = "must be a valid date";

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }

    //correcting September
    if (monthValue == 9 && (dayValue == 31)) {

        dayError.innerHTML = "must be a valid date";

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }

    //correcting November
    if (monthValue == 11 && (dayValue == 31)) {

        dayError.innerHTML = "must be a valid date";

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }

    //correcting February
    if (monthValue == 2 && (dayValue > 29)) {

        dayError.innerHTML = "must be a valid date";

        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = 'red';
        }

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].style.borderColor = 'red';
        }
    }


    /* return {
         years: yearsDifference,
         months: monthsDifference,
         days: daysDifference
     }; */
}

// Function to get the number of days in a month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}









