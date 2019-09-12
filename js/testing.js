var calculate = function(number1, number2) {
return (number1 / (number2 * number2)) * 703
};

var weight = parseInt(prompt("How much do you weigh in pounds?"));
var height = parseInt(prompt("What is your height in inches?"));

alert(calculate(weight, height)); 
