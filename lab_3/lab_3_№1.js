let mas = [];
console.log("Ваш массив: ")
for (i=0; i<5; i++) {                               //Цикл на значения
    mas[i] = Math.round(Math.random()*200 - 100);
    console.log(mas[i]);
}
console.log("   ");
console.log("   ");
let multiples = 0;
for (i = 0; i < mas.length; i++) {                  //Цикл на кратность 3
    if (mas[i] % 3 == 0) {
        multiples++;
        console.log(`Число ${mas[i]} кратно 3`);
    }
    else {
        console.log(`Число ${mas[i]} не кратно 3`);
    }
}
console.log("   ");
console.log("   ");
console.log(`В массиве ${multiples} числа, кратных 3`)


let masSum = 0;
for (i = 0; i < mas.length; i++) {                  //Вывод суммы элементов массива
    masSum = masSum + mas[i];
}
console.log("   ");
console.log("   ");
console.log(`Сумма чисел массива = ${masSum}`);


console.log("   ");
console.log("   ");


let positiveNums = 0;
for (i = 0; i < mas.length; i++) {                  //Цикл на поиск положительных чисел
    if (mas[i] >= 0) {
        positiveNums++;
        console.log(`Число ${mas[i]} является положительным`)
    }
    else{
        console.log(`Число ${mas[i]} является отрицательным`)
    }
}
console.log("   ");
console.log("   ");
console.log(`В массиве ${positiveNums} положительных числа`)

console.log("   ");
console.log("   ");

let evenNums = 0;
for (i = 0; i < mas.length; i++) {                  //Цикл на поиск четных чисел
    if (mas[i] % 2 == 0) {
        evenNums++;
        console.log(`Число ${mas[i]} является четным`)
    }
    else{
        console.log(`Число ${mas[i]} является нечетным`)
    }
}

console.log("   ");
console.log("   ");
console.log(`В массиве ${evenNums} четных числа(-ел)`)