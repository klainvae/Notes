num = '2 3 6 4'
let sum = 0
const num2 = num.split(' ')
for (let i = 0; i < num2.length; i++) {
    sum += +num2[i]
}
console.log(sum)
