let obj = {
  name: "man",
  Ann: 130,
  Mike: 160,
};
let obj2 = finder(obj);
function finder(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "number") {
      obj[i] *= 2;
    }
  }
  return obj;
}
console.log(obj2);
