// Male Akan names
const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

// Female Akan names
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

// Days of the week
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const form = document.getElementById("akanForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Validation

    if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Check for real dates
    const birthDate = new Date(year, month - 1, day);

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== day
    ) {
        alert("Please enter a valid date.");
        return;
    }

    // Get day number
    const dayIndex = birthDate.getDay();

    let akanName = "";

    if (gender.value === "male") {
        akanName = maleNames[dayIndex];
    } else {
        akanName = femaleNames[dayIndex];
    }

    result.innerHTML = `
        <h2>Your Result</h2>
        <p><strong>Birthday:</strong> ${days[dayIndex]}</p>
        <p><strong>Akan Name:</strong> ${akanName}</p>
    `;

});


