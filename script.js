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

document
.getElementById("akanForm")
.addEventListener("submit", function(e){

e.preventDefault();

let day = Number(document.getElementById("day").value);

let month = Number(document.getElementById("month").value);

let year = Number(document.getElementById("year").value);

let gender = document.getElementById("gender").value;

// Validation

if(day<1 || day>31){

alert("Invalid day");

return;

}

if(month<1 || month>12){

alert("Invalid month");

return;

}

if(gender===""){

alert("Select gender");

return;

}
// JavaScript Date object

let birthDate = new Date(year,month-1,day);

let weekDay = birthDate.getDay();

let akanName;

if(gender==="male"){

akanName = maleNames[weekDay];

}

else{

akanName = femaleNames[weekDay];

}


document.getElementById("result").innerHTML=

`You were born on <strong>${days[weekDay]}</strong>.<br>
Your Akan name is <strong>${akanName}</strong>.`;

});