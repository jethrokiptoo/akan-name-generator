//AKAN DATA 



 const days = [ 
    "Sunday",
     "Monday",
    "Tuesday", 
    "Wednesday", 
    "Thursday",
     "Friday",
     "Saturday" ]; 
        
const maleNames = 
 [ 
    "Kwasi",
     "Kwadwo", 
    "Kwabena", 
    "Kwaku",
     "Yaw", 
    "Kofi",
    "Kwame"]; 
              
const femaleNames = [
    "Akosua", 
   "Adwoa", 
    "Abenaa",
    "Akua", 
    "Yaa",
    "Afua",
    "Ama" ]


//GET ELEMENTS



const form = document.getElementById("akanForm"); 
const dayInput = document.getElementById("day");
 const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year"); 
  const genderInput = document.getElementById("gender");
  
  const resultPlaceholder = document.getElementById("resultPlaceholder");
   const resultContent = document.getElementById("resultContent"); 
   const resultDay = document.getElementById("resultDay"); 
   const akanName = document.getElementById("akanName"); 
   const resultMessage = document.getElementById("resultMessage"); 
   const resultDescription = document.getElementById("resultDescription");
    const resetButton = document.getElementById("resetButton"); 
    const header = document.querySelector(".header"); 
    const menuToggle = document.getElementById("menuToggle"); 
    const navLinks = document.getElementById("navLinks");



     // MOBILE MENU 
      menuToggle.addEventListener("click", 
        function () {
             navLinks.classList.toggle("active");
             }); 
             
             
             
// CLOSE MOBILE MENU 
 const navigationLinks = document.querySelectorAll(".nav-links a");
  navigationLinks.forEach(function (link) { 
    link.addEventListener("click", 
        function () {
             navLinks.classList.remove("active");
             }); 
            
});                  
