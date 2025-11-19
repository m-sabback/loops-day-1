//////////////      1      //////////////

// for(let i = 1; i <= 50; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//////////////      2      //////////////

// let num = [10, 5, 3, 7, 2];
// let sum = 0
// for(let i=0; i < num.length; i++){
//     sum += num[i]
// }

// let total = 0
// let i = 0
// while(i < num.length ){
//     total += num[i]
//     i++
// }

//////////////      3      //////////////

// let i = 20

// while(i >= 0){
//     console.log(i)
//     i--
// }

// do{
//     console.log('number',i)
//     i--;
// }while(i >= 0)

//////////////      4      //////////////

// let students = ["Ali", "Sara", "Nora", "Omar"];
// for(let name of students){
//     console.log('student: ',name)
// }

//////////////      5      //////////////

// let car = { brand: "BMW", model: "M5", year: 2024, color: "Black" };
// for( key in car){
//     console.log(`${key}: ${car[key]}`)
// }

//////////////      6      //////////////

// let arr = [4, 1, 9, 12, 3, 7, 14, 21, 77, 11];
// let max = 0;
// for (let i=0; i<arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }

//////////////      7      //////////////

// let text = "JavaScript";
// let count = 0;
// for (let char of text) {
//   count++;
// }
// console.log(count);

//////////////      8      //////////////

// for(let i = 1; i <= 10; i++){

//     console.log('I love coding',i)
// }

//////////////      9      //////////////

// let num = [2, 9, 4, 12, 3, 7];
// for(let i of num ){
//     if(i>5)console.log(i)
// }

//////////////      10      //////////////

let numbers = [1, 2, 3, 4, 5];
let doubled = []
for(let num of numbers){
    doubled.push(num* 2) 
}
console.log(doubled)