let month = [];
let firstDay = Math.floor(Math.random() * 7);
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let daysOfMonth = [];
daysOfMonth[0] = days[firstDay];
let numberOfDay = 0;

for (let i = 0; i < 31; i++) {
    month[i] = i + 1
}
console.log(month);

for (i = 0; i < days.length; i++) {
    if (i == firstDay ) {
        numberOfDay = i + 1; 
        break;
    }
}

console.log(`${month[0]} января, ${daysOfMonth[0]}`)

for (let i = 1; i < month.length; i++) {
    if (numberOfDay === 7) {
        numberOfDay = 0
    }
    daysOfMonth[i] = days[numberOfDay];
    numberOfDay++;
    
    console.log(`${month[i]} января, ${daysOfMonth[i]}`)
}