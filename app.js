console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1
let favNum = 13;
let answer= window.prompt("Please input a number");
if (answer<favNum){
  console.log("Too low");
} else if (answer>favNum){
  console.log("Too high");
} else{
  console.log("Congratulations!!!");
}

//Exercise 2
let birthMonth = window.prompt("What is your birth month?");
switch (birthMonth) {
  case "December":
  case "January":
  case "February": 
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    conosle.log("Fall");
    break;
  default:
    console.log("Please try again");} 

//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
case "01":
  type="Tank top";
  break;
case "02":
  type="T-shirt";
  break;
case "03":
  type="Long Sleeve";
  break;
case "04":
  type="Sweat Shirt";
  break;
default:
  type = "Other";
}

switch(colorId){
  case "BL":
    color="Black";
    break;
  case "BL":
    color="Blue";
    break;
  case "RD":
    color="Red";
    break;
  case "PU":
    color="Purple";
    break;
  default:
    color = "White";
  }

  switch(sizeId){
    case "S":
      size="Small";
      break;
    case "M":
      size="Medium";
      break;
    case "L":
      size="Large";
      break;
    case "XL":
      size="Extra Large";
      break;
    default:
      size = "One Size Fits All";
    }  

console.log(`Product: ${size} ${color} ${type}`);