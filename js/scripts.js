function saySomething(whatToSay) {
  window.alert(whatToSay);
}

// business logic
function add (number1, number2){
  return number1 + number2;
}

function sub (number1, number2){
  return number1 - number2;
}

function mult (number1, number2){
  return number1 * number2;
}

function div (number1, number2){
  return number1 / number2;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// window.alert(add(number1, number2), sub(number1, number2));
window.alert( add(number1, number2) + ' ' + sub(number1, number2) + ' ' + mult(number1, number2) + ' ' + div(number1, number2));
// window.alert(sub(number1, number2));
// window.alert(mult(number1, number2));
// window.alert(div(number1, number2));

// const additionResult = add(10, 5);
// window.alert(additionResult);
// saySomething("hi");

// const result = add(3, 5);
// const outputText = "The sum is " + result + ".";
// saySomething(outputText);
// saySomething("The sum is " + add(3, 5) + ".");