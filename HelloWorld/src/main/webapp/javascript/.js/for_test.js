// 1 ~ 100 사이의 임의의 수를 생성 => 배열에 저장[5].
// 배열값중 최대값을 구하도록 반복문을 작성.
// 배열요소는 document.write() => 5개 요소를 화면에 출력.

// value = [];
// let max = 0;
// for (let i = 0; i < 5; i++) {
//     let random = Math.ceil(Math.random() * 100);
//     value[i] = random;
//     if (max < value[i]) {
//         max = value[i];
//     }
// }

// document.write('출력 숫자: ' + value + '<br>');
// document.write('최대값: ' + max);



// const tempArr = [];
// for (let i = 0; i < 5; i++){
//     let temp = Math.ceil(Math.random()) * 100;
//     tempArr[i] = temp;
// }

// tempArr.forEach(val => document.write(`<p>${val}</P>`));

// let max = tempArr.forEach(val =>{
//     if(val > max){
//         max = val;
//     }
// });

// console.log('Max: ' + max); // ???


// 함수의 스코프 체인.

var a = 1;
var b = 5;

function outerFunc(){
    function innerFunc(){
        a = b;
    }
    console.log(a); // 1
    a = 2;
    b = 4;
    innerFunc(a); 
    console.log(a); // 4 
    var b = 2;
    console.log(b); // 2
}

outerFunc();
console.log(b); // 5