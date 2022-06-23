'use strict';

let ask = prompt("Do you want to perform a calculation? y/n");

if (ask == "y" || ask == "Y") {
  let calcOperator = prompt("Choose an operator \n +, -, *, /, %");
  let firstNum = Number(prompt("Choose a number"));
  let secondNum = Number(prompt("Choose another number"));
  if (calcOperator == "+") {
    let result = firstNum + secondNum;
    alert("The answer is " + result);
  } else if (calcOperator == "-") {
    let result = firstNum - secondNum;
    alert("The answer is " + result);
  } else if (calcOperator == "*" || calcOperator == "x") {
    let result = firstNum * secondNum;
    alert("The answer is " + result);
  } else if (calcOperator == "/") {
    let result = firstNum / secondNum;
    alert("The answer is " + result);
  } else if (calcOperator == "%") {
    let result = firstNum % secondNum;
    alert("The answer is " + result);
  } else {
    alert("Invalid Operation");
  }
} else if (ask == "n" || ask == "N") {
  alert("Have a nice day!!!");
} else{
    alert("Invalid option")
}