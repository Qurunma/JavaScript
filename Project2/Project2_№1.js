let mas = [];
let n = 0;
let m = 100;
let count = 100;

let max = Math.max(m,n) + 1;
let min = Math.min(m,n) + 1;
let range = Math.abs(max - min);
for (i = 0; i < count; i++) {
    mas[i] = Math.round(Math.random() * range + min);
    console.log(`Элемент массива №${i+1} ${mas[i]}`);
}
console.log("");
console.log(`В массиве ${mas.length} элемента(-тов)`);
