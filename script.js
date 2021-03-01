var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("Enter Your First Number"));

//if ( num1 ==""){
  //containerEle.innerHTML = "error"
//}

var num2 = Number(prompt("Enter Your Second Number"));

//if (isNaN(num2)) {
// end;
//}
var finaladd = num1 + num2;
var finalminus = num1 - num2;
var finalmultiply = num1 * num2;
var finaldivide = num1 / num2;

var operator = prompt("Enter Your Desired Operator");

if (operator === "+") {
  containerEle.innerHTML = "Your Answer is " + finaladd;
}

if (operator === "-") {
  containerEle.innerHTML = "Your Answer is " + finalminus;
}

if (operator === "*") {
  containerEle.innerHTML = "Your Answer is " + finalmultiply;
}

if (operator === "/") {
  containerEle.innerHTML = "Your Answer is " + finaldivide;
}