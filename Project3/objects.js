// Задача 5
// Создать функцию, входными параметрами которой будут 2 числа.
// Создайте объект calculator (калькулятор) с двумя свойствами,
// значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Введите первое число: "),
//   (num1) => {
let num1 = 6;
let num2 = 8;
let obj;
obj = calculate(num1, num2);
function calculate(num1 = 3, num2 = 6) {
  let calculator = {
    num1,
    num2,
    summ() {
      return this.num1 + this.num2;
    },
    multiplication() {
      return this.num1 * this.num2;
    },
  };
  return calculator;
}
console.log("Сумма первого и второго числа = ", obj.summ());
console.log("Произведение первого и второго числа = ", obj.multiplication());
// };
