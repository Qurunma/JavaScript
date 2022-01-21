let a = 13.123456789;
let b = 2.123;
let n = 5;

a = a * 10 ** n;
console.log(a);
let Fraction_a = a % 1;
console.log(Fraction_a);
a = a - Fraction_a;
console.log(a);
a = a / 10 ** n;
console.log(a);
console.log("\n");

b = b * 10 ** n;
console.log(b);
let Fraction_b = b % 1;
console.log(Fraction_b);
b = b - Fraction_b;
console.log(b);
b = b / 10 ** n;
console.log(b);
console.log("\n")

console.log("a = b", a == b);
console.log("a > b", a > b);

