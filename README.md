# Akan Name Generator 

 Project Description

The Akan Name Generator is a simple web application that determines the day of the week a person was born and assigns an Akan name based on their gender.

Akan names originate from Ghanaian culture, where traditional names are associated with the day of the week on which a person was born.

The application accepts a user's day, month, year, and gender, validates the information, calculates the day of the week, and displays the appropriate Akan name.



 Akan Names


 Day        Male Name  Female Name |

 Sunday     Kwasi     | Akosua      |
 Monday     Kwadwo    | Adwoa       |
 Tuesday    Kwabena   | Abenaa      |
 Wednesday  Kwaku     | Akua        |
 Thursday   Yaw       | Yaa         
 Friday     Kofi      | Afua        |
 Saturday   Kwame     | Ama         |



 Author

Jethro Kiptoo



Technologies Used

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages



 Features

* User-friendly date input
* Gender selection
* Input validation
* Day-of-the-week calculation
* Akan name generation
* Animated result display
* Responsive design
* Mobile-friendly layout



 Setup Instructions



cd akan-name-generator


3. Open the website

Open `index.html` in a web browser.



BDD

 Feature: Akan Name Generation

**Scenario 1: Valid information**

Given a user enters a valid day, month, and year.

And the user selects a gender.

When the user clicks "Generate Akan Name".

Then the application calculates the day of the week.

And displays the appropriate Akan name.



Scenario 2: Invalid day

Given the user enters a day less than 1 or greater than 31.

When the user submits the form.

Then an alert should inform the user that the day is in

Scenario 3: Invalid month

Given the user enters a month less than 1 or greater than 12.

When the user submits the form.

Then an alert should inform the user that the month is invalid.



 Scenario 4: Gender not selected

Given the user enters a valid date.

But does not select a gender.

When the user submits the form.

Then an alert should ask the user to select a gender.



 How to Use

1. Enter your day of birth.
2. Enter your month of birth.
3. Enter your year of birth.
4. Select your gender.
5. Click **Generate Akan Name**.
6. Your birth day and Akan name will appear.



 Contact

  Author: Jethro Kiptoo

For questions or feedback, contact the project author.



 License

Copyright © 2026 Jethro Kiptoo.

This project is created for educational purposes.
