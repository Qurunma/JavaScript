let roadMines = [false, false, false, false, false, false, false, false, false, false];
let destroys = 0;
let numberOfroad = 0;
for (let mine of roadMines) {
    numberOfroad++;
    console.log(`Танк переместился на ${numberOfroad}`)
    if (mine) {
        destroys++
        if (destroys == 1) {
            console.log("Танк подбит");
        }
        else if (destroys == 2) {
            console.log("Танк уничтожен");
            break;
        }
        else {
            console.log("Программа сломалась");
        }
    }
}
if (destroys != 2) {
    console.log("Боевая задача выполнена")
}