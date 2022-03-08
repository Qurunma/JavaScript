let randomNum = Math.round(Math.random() * 10);
let userAnswer;
console.log(randomNum);

while (true) {
  userAnswer = prompt("Введите число в диапазоне от 0 до 10");
  console.log(userAnswer);
  console.log(Number(userAnswer));
  if (userAnswer?.trim() == "") {
    userAnswer = undefined;
    alert("Введи число, а не пустую строку");
  }
  // console.log(typeof userAnswer);
  // console.log(userAnswer == "");

  if (userAnswer === null) {
    alert("Вы вышли из игры");
    break;
  } else if (Number(userAnswer) === randomNum) {
    alert("Вы ввели правильное число!");
    break;
  } else if (Number(userAnswer) > randomNum) {
    alert("Искомое число меньше введенного");
  } else if (Number(userAnswer) < randomNum) {
    alert("Искомое число больше введенного");
  } else if (typeof userAnswer === "string") {
    alert("Введите число");
  }
}
