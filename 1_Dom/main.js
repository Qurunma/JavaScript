let mass = [
  document.createElement("option"),
  document.createElement("option"),
  document.createElement("option"),
];
for (let id in mass) {
  mass[id].textContent = `Вариант ${parseInt(id) + 1}`;
  vibor.append(mass[id]);
}
