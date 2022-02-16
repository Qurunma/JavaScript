function filter({ name }, needName) {
  for (let objIs of objects) {
    if (objIs.name === needName) {
      return objIs;
    }
  }
  return "Такого имени нет.........    :(";
}

let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];
let needName = "Иван";

console.log(filter(objects, needName));
