n = 0
m = 100

max = Math.max(m,n) + 1
min = Math.min(m,n) + 1
range = Math.abs(max - min)
random_num = Math.floor(Math.random() * range + min)
ost = 1 - (random_num % 2)
num_in_range = (random_num - ost)
console.log(max)
console.log(min)
console.log(range)
console.log(random_num)
console.log(ost)
console.log(num_in_range)
