// loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];

// 1)
// 짝수합 => result.

let result = 0;

for(let i =0; i <numbers.length; i++){
//    document.write(numbers[i])
    if(numbers[i] % 2 == 0){
        result += numbers[i];
    }
}
console.log('짝수합: ' + result);

// 2)

let result2 = 0;

numbers.forEach((val, index, ary)=>{
    if(val % 30){
        result2 += val;
    }
});

console.log('홀수합: ' + result2)
