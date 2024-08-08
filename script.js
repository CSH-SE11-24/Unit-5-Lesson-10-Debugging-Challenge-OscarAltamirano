console.log("script.js running");

let button = document.querySelector("#lowerCaseButton");
console.log(button);

let h1 = document.getElementById("hello");
console.log(h1);

button.addEventListener("click", function(event){
  console.log("lowercase clicked") ;
  h1.textContent = "hello there"
})

let buttons = document.querySelector("#uppercaseButton");
console.log(buttons);

buttons.addEventListener("click", function(event){
  console.log("uppercase clicked") ;
  h1.textContent = "HELLO THERE";
});