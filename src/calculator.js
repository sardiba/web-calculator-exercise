// TODO: import things from other modules here
import { input } from "./input.js";
import { multiply, add, subtract, divide } from "./math.js";
import { setOutput } from "./output.js";
import { getRandomNumber } from "./random.js";

const handleCalculate = (event) => {
  const math = { multiply, add, subtract, divide };

  // TODO: use event.target to figure out the operation, then calculate and output the result
  console.log(event.target);
  const operation = event.target.dataset.calculate;
  console.log(operation);

  const a = parseInt(input.a.value, 10); //10 is basis 0-9
  const b = parseInt(input.b.value, 10);
  const { calculate } = event.target.dataset;
  setOutput({
    a,
    b,
    operator: event.target.innerHTML,
    result: math[calculate]?.(a, b),
  });

  let result;
  //shorter version of if function
  operation === "add"
    ? (result = add(a, b))
    : operation === "subtract"
    ? (result = subtract(a, b))
    : operation === "multiply"
    ? (result = multiply(a, b))
    : (result = divide(a, b));

  // if (operation === "add") {
  //   result = add(a, b);
  // } else if (operation === "subtract") {
  //   result = subtract(a, b);
  // } else if (operation === "multiply") {
  //   result = multiply(a, b);
  // } else {
  //   result = divide(a, b);
  // }
  console.log(result);
};

const handleRandom = (event) => {
  // TODO: use event.target to decide which inputs value to set to a random number
  const dice = event.target.dataset.randomForInput;
  const randomNumber = getRandomNumber(1, 6);
  console.log(dice);
  if (dice === "a") {
    input.a.value = randomNumber;
  } else {
    input.b.value = randomNumber;
  }
};

document.querySelectorAll("[data-calculate]").forEach((buttonCalculate) => {
  buttonCalculate.addEventListener("click", handleCalculate);
});

document.querySelectorAll("[data-random-for-input]").forEach((buttonRandom) => {
  buttonRandom.addEventListener("click", handleRandom);
});
