const numbers = [2, 3, 8, 5, 1, 9];

let sum = 0;

numbers.forEach(num =>{
    sum += num;

})

console.log(sum);

let result = numbers.reduce(function (acc ,val ,idx ,ary){
    console.log(acc, val, idx ,ary);
    return acc + val;
}, 0);

result = numbers.reduce((acc ,val ,idx ,ary) =>{
    console.log(acc, val);
    acc.push(val + 2); // [4, 5, 10, 7, 3]
    return acc;
}, []);


{/* <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul> */}
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if(idx == 0){
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>';
    if(idx == numbers.length - 1){
        acc += '</ul>';
    }
    return acc; // 다음 순번의 누적초기값으로 사용.
}, ''); 

document.write(result);

// 배열요소의 max 값.

let max = numbers[0];

numbers.forEach(num => {
    if(max < num){
        max = num;
    }

})

console.log(max);



result = numbers.reduce((acc, val, idx) => {
    if(acc < val){
        acc = val;
    }
    return acc;

}, 0)

console.log('최대값: ' + result);
