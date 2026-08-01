// AKAN NAME GENERATOR



// AKAN DAYS

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];



// MALE AKAN NAMES


const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];



// FEMALE AKAN NAMES


const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];



// GET ELEMENTS FROM YOUR HTML


const form = document.getElementById("akanForm");

const dayInput = document.getElementById("day");

const monthInput = document.getElementById("month");

const yearInput = document.getElementById("year");

const genderInput = document.getElementById("gender");

const resultPlaceholder =
    document.getElementById("resultPlaceholder");

const resultContent =
    document.getElementById("resultContent");

const resultMessage =
    document.getElementById("resultMessage");

const resultDay =
    document.getElementById("resultDay");

const akanName =
    document.getElementById("akanName");

const resultDescription =
    document.getElementById("resultDescription");

const resetButton =
    document.getElementById("resetButton");


// ============================================
// CALCULATE DAY OF THE WEEK
// ============================================

function calculateDay(day, month, year) {

    const date = new Date(
        year,
        month - 1,
        day
    );

    return date.getDay();
}



// VALIDATE DATE


function isValidDate(day, month, year) {

    // Check that values exist
    if (
        day === "" ||
        month === "" ||
        year === ""
    ) {
        return false;
    }


    // Check day
    if (
        day < 1 ||
        day > 31
    ) {
        return false;
    }


    // Check month
    if (
        month < 1 ||
        month > 12
    ) {
        return false;
    }


    // Check year
    if (
        year < 1 ||
        year > new Date().getFullYear()
    ) {
        return false;
    }


    // Create the date
    const date = new Date(
        year,
        month - 1,
        day
    );


    // Check if the date actually exists
    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return false;
    }


    return true;
}



// CELEBRATION ANIMATION


function celebration() {

    // Create 70 celebration pieces
    for (let i = 0; i < 70; i++) {

        const confetti =
            document.createElement("div");


        confetti.textContent = "🎉";


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 20 + 12 + "px";

        confetti.style.zIndex = "99999";

        confetti.style.pointerEvents = "none";


        document.body.appendChild(confetti);


        // Animate
        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(110vh) rotate(720deg)",

                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2500 + 2000,

                    easing: "ease-out"
                }

            );


        // Remove when finished
        animation.onfinish = function () {

            confetti.remove();

        };

    }

}



// SHOW THE RESULT


function showResult(name, dayName) {

    // Hide placeholder
    resultPlaceholder.style.display =
        "none";


    // Show result
    resultContent.style.display =
        "block";


    // Show birthday
    resultMessage.textContent =
        `🎉 Congratulations! You were born on ${dayName}.`;


    // Show day
    resultDay.textContent =
        dayName;


    // Show Akan name
    akanName.textContent =
        name;


    // Show description
    resultDescription.textContent =
        `Your traditional Akan name is ${name}. Celebrate your identity and heritage!`;


    // Run celebration
    celebration();


    // Result animation
    resultContent.animate(

        [
            {
                opacity: 0,
                transform: "scale(0.6)"
            },

            {
                opacity: 1,
                transform: "scale(1.1)"
            },

            {
                opacity: 1,
                transform: "scale(1)"
            }
        ],

        {
            duration: 900,
            easing: "ease-out"
        }

    );

}



// FORM SUBMISSION


form.addEventListener(
    "submit",
    function (event) {

        // Prevent page reload
        event.preventDefault();


        // Get values from HTML
        const day =
            Number(dayInput.value);

        const month =
            Number(monthInput.value);

        const year =
            Number(yearInput.value);

        const gender =
            genderInput.value;


        
        // CHECK GENDER
        

        if (gender === "") {

            alert(
                " Please select your gender."
            );

            genderInput.focus();

            return;
        }


        // CHECK DATE
      

        if (
            !isValidDate(
                day,
                month,
                year
            )
        ) {

            alert(
                "❌ Invalid date!\n\n" +
                "Please enter a valid date."
            );

            return;
        }


       
        
        // FIND DAY
       

        const dayIndex =
            calculateDay(
                day,
                month,
                year
            );


        const dayName =
            days[dayIndex];


        
        // FIND AKAN NAME
      

        let name;


        if (gender === "male") {

            name =
                maleNames[dayIndex];

        }

        else if (gender === "female") {

            name =
                femaleNames[dayIndex];

        }


       
        // DISPLAY RESULT
       

        showResult(
            name,
            dayName
        );

    }
);



// RESET FORM


resetButton.addEventListener(
    "click",
    function () {

        // Clear inputs
        form.reset();


        // Hide result
        resultContent.style.display =
            "none";


        // Show placeholder
        resultPlaceholder.style.display =
            "block";

    }
);

