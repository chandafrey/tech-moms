// Get the div you created
// const greeting = document.querySelector("#greeting");
// or you can use .getElementById and then you would NOT use # 
const greeting = document.getElementById("greeting");
// test this on the console in devTools
console.log(greeting);
// Add styling
greeting.style.textAlign = "center";
greeting.style.marginTop = '50px';
// Ask the user their name
// .window.prompt will open a window to ask the prompt
// the first part is the question, the second part is the suggestion
const username = window.prompt("What is your name?", "Jane")
// Put a greeting inside the greeting div
greeting.textContent = "Welcome to my website, " + username + "1"