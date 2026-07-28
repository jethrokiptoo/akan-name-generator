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

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

  document.addEventListener("DOMContentLoaded", 
    function () {

    const form = document.getElementById("akanForm");
    
 document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();



        const day = parseInt(document.getElementById("day").value);
        const month = parseInt(document.getElementById("month").value);
        const year = parseInt(document.getElementById("year").value);

        const gender = document.querySelector('input[name="gender"]:checked');

        // Validate inputs
        if (isNaN(day) || day < 1 || day > 31) {
            alert("Please enter a valid day (1-31).");
            return;
        }

        if (isNaN(month) || month < 1 || month > 12) {
            alert("Please enter a valid month (1-12).");
            return;
        }

        if (isNaN(year) || year < 1000) {
            alert("Please enter a valid year.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        console.log("Day:", day);
        console.log("Month:", month);
        console.log("Year:", year);
        console.log("Gender:", gender.value);

        // Continue with your Akan name calculation here

    });

});