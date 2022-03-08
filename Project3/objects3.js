function filter({ name }, needName) {
  let finded = [];
  for (let objIs of objects) {
    if (objIs.name === needName) {
      finded.push(objIs);
    }
  }
  return finded;
}

let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Иван", surname: "Петров" },
];
let needName = "Иван";

console.log(filter(objects, needName));
