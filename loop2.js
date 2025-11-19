//////////////      1      //////////////

// let text = "JavaScript is a powerful programming language";
// let word = ''
// let result = []
// for(let char of text){
//     if(char !== ' '){
//         word += char
//     }else{
//         if(word.length > 4){
//             result.push(word)
//             word = ''
//         }
//     }
// }
////// ES6+
// let result = text.split(' ').filter(word => word.length > 4)
// console.log(result)

//////////////      2      //////////////

// let text = "banana";
// let obj = {}
// for(let char of text){
//     if(obj[char]){
//         obj[char]++
//     }else{
//         obj[char] = 1
//     }
// }

////// ES6+

// let obj = text.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0)+1
//     return acc
// }, {})
// console.log(obj)

////////////      3      //////////////

// let n = 13
// let arr = []
// for(let i=1; i<=n;i++){
//     arr.push(i)
// }
////// ES6+
// let arr = Array.from({length: n},(_, i) => i + 1)
// console.log(arr)
//////////////      4      //////////////

let data = { a: 10, b: "hello", c: 5, d: null, e: 7, f: "world", g: 3};
// let total = []
// let sum = 0
for(let num in data){
    if(){
          total.push(Number(data[num]))
    }
}
// for(let num of total){
//      sum += total[num]
// }
console.log(total, sum)


////// ES6+

//////////////      5      //////////////

// let num = [3, 25, 11, 4, 99, 8, 13];
// let newNum = []
// for(let i=0; i < num.length; i++){
//     if(num[i]>10){
//         newNum.push(num[i])
//     }
// }
// console.log(newNum)


////// ES6+

//////////////      6      //////////////

// for(let i=1; i<=100;i++){
//         console.log(`${i} `)
//         i++
// }


////// ES6+

//////////////      7      //////////////

// let n = 3
// let count = 5
// let i = 1;
// let arr = []
// while(arr.length < count){
//     arr.push(i * n)
//     i++

// }
// console.log(arr)


////// ES6+

//////////////      8      //////////////
// ixixix = 'Google is good for students'
// input = "hello"
// output =''
// for(let i of input){

// }
// console.log()


////// ES6+

//////////////      9      //////////////

// let max;
// let numbers = [
//   [5, 1, 9],
//   [3, 7, 2],
//   [8, 4, 6],
// ];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j of numbers[i]) {
//     console.log(j);
//     if (j < numbers[i] ) {
//         max = j;
//     }
//   }
// }
// console.log(max);


////// ES6+

//////////////      10      //////////////
// const words = {
//     wordsCount:0
// }
// let sentence = "JavaScript loops are very powerful when used correctly";
// for(let i=0; i<sentence.length;i++){
//     if(sentence[i] === ' ' || i === sentence.length -1){
//         words.wordsCount++
//     }
// }

// console.log(words)

////// ES6+
