// alert("Hello from JS");

let dateTime = new Date()
console.log('data type of dateTime:', typeof(dateTime));
let hour = dateTime.getHours(); //get the current hour 0-23
//set the meal based on current hour 
// hour = 23
let meal = "";
if(hour < 4) {
     meal = "fourth Meal";
} else if(hour < 11) {
    meal = "breakfast";
} else if (hour < 16) { // hour is 16+ 
     meal = "lunch";
} else if (hour < 22) { // hour is 16+ 
     meal = "dinner";
} else {
     meal = "Fourth Meal"
}
// make the a tag as a concatenated string
let mealLink = '<a class="button" style= "background-color: tan ; color: black; href="' + meal + '.html">' + meal + '</a>';
console.log(mealLink);
// output the meal link to the current menu div
let currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.innerHTML = mealLink;

// function runs when dark mode check box is checked or unchecked
//get the checkbox
let ckbox = document.querySelector('input');
// instruct the checkbox to call function whenever checkbox is checked or unchecked 
ckbox.addEventListener('change', toggleDarkmode);
function toggleDarkmode() {
    console.log(this.checked);
    // if checkbox is checked, use dark mode 
    // else checkbox is unchecked, so switch to login
    if(this.checked) {
     document.body.style.backgroundColor = "";
     document.body.style.color = "#ffc793";
    } else {
     document.body.style.backgroundColor = "#";
     document.body.style.color = "#3d1c07";
    }
}

let heroH3 = document.querySelector('div h3');
let timelyGreeting = "";
let timeNow = dateTime.toLocaleTimeString('en-US');
if(hour < 12) {
     timelyGreeting = "Good Morning!";
} else if(hour < 17) {
     timelyGreeting = "Good Afternoon!";
} else if (hour < 22){
    timwlyGreeting = "Good Evening!"
} else {
     timelyGreeting = "Hello night owl";
}
timelyGreeting += "<br>Time is now: " + timeNow;
heroH3.innerHTML = timelyGreeting;
// background-color: tan ; color: black;
let foodQuotes = [
     
"One cannot think well, love well, sleep well, if one has not dined well. - Virginia Woolf",

"Let food be thy medicine and medicine be thy food  - Hippocrates",

"People who love to eat are always the best people. - Julia Child",

"The only way to get rid of a temptation is to yield to it. - Oscar Wilde",

"Food is our common ground, a universal experience. - James Beard",

];
// console.log(foodQuotes[r]);
let r = Math.floor(Math.random() * foodQuotes.length)
console.log(r);
console.log(foodQuotes[r]);
let quoteH4 = document.querySelector('div h4');
quoteH4.textContent = foodQuotes[r];