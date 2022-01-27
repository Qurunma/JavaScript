let name = "Иван";
let surname = "Иванов";

nameNotChecked = name.substr(1) 
nameNotChecked2 = name.substr(0, 1)

surnameNotChecked = surname.substr(1) 
surnameNotChecked2 = surname.substr(0, 1)

nameChecked = nameNotChecked.toLowerCase();
nameChecked = nameNotChecked2.toUpperCase() + nameChecked;
console.log(nameChecked);

surnameChecked = surnameNotChecked.toLowerCase();
surnameChecked = surnameNotChecked2.toUpperCase() + surnameChecked;
console.log(surnameChecked);

if (name != nameChecked || surname != surnameChecked) 
{
    console.log("Регистр был изменен")
}
else
{
    console.log("Регистр не был изменен")
}