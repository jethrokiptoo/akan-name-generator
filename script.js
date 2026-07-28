// Akan names

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

// Days

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.getElementById("akanForm").addEventListener("submit", function(e){

    e.preventDefault();

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    if(day < 1 || day > 31){
        alert("Enter a valid day.");
        return;
    }

    if(month < 1 || month > 12){
        alert("Enter a valid month.");
        return;
    }

    if(!gender){
        alert("Please select a gender.");
        return;
    }

    // Century and Year
    let CC = Math.floor(year / 100);
    let YY = year % 100;

    // Formula
    let dayNumber = (
        ((CC / 4) - 2 * CC - 1) +
        ((5 * YY) / 4) +
        ((26 * (month + 1)) / 10) +
        day
    );

    dayNumber = Math.floor(dayNumber);
    dayNumber = ((dayNumber % 7) + 7) % 7;

    let akanName;

    if(gender.value === "male"){
        akanName = maleNames[dayNumber];
    }else{
        akanName = femaleNames[dayNumber];
    }

    document.getElementById("result").innerHTML =
        `You were born on <strong>${days[dayNumber]}</strong>.<br>Your Akan name is <strong>${akanName}</strong>.`;

});

