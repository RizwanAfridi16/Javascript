let x = prompt("Enter value 1");
num1 = parseInt(x);
let operator = prompt("Enter operator (+, -, *, /):");
let y= prompt("Enter value 2");
num2 = parseInt(y);
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}
alert("Result: " + result);