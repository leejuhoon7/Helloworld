// 원시형 vs 참조형

let str1 = 'Hello'; // string
let str2 = new String('Hello'); // object

console.log(str1 == str2); // 값을 비교.
console.log(str1 === str2); // 값과 타입 비교.

let num1 = 20; //number
let num2 = new Number(20); //object

console.log(num1 == num2);
console.log(num1 === num2);

let obj; // undefined.
obj = null; // null.

let sym1 = Symbol('symbol'); // unique 키 값을 생성.
let sym2 = Symbol("symbol");

console.log(sym1 == sym2); // false

// 객체(object)
obj = {
    sname: 'Hong', // 속성: 속성값
    age: 20,
    showAge: function () {
        console.log('나이는 ' + this.age + '입니다.');

    } // 메소드
}

console.log(obj.sname);
console.log(obj['age']);

obj.showAge();

obj.sname = 'Hwang'; // 값 황당.


// 배열
const numbers = []; // new Array();
numbers[numbers.length] = 10;
numbers[numbers.length] = 20;
numbers[numbers.length] = 30;

numbers.forEach(function (val) {
    console.log(val);

}) // 메소드(콜백함수(값, 인덱스, 배열))

const randomvals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); // 0~1 임의값을 생성.
    randomvals[i] = val;

    console.log(randomvals[i]);

}

console.clear(); // 콘솔메세지 초기화.

randomvals.forEach(function (val){

    if(val > 5){
        console.log(val);
    }
});


randomvals.remove(); // 배열값 초기화.

// Math.random() : 0~1 임의값 생성.
// 21 ~ 50 까지의 임의 값을 생성.


console.log(Math.ceil(.8)); // 0 ~ 1


ran = [];

for (let i = 0; i < 5; i++) {

    let random = Math.ceil(Math.random() * 30) + 20;
    ran[i] = random;

}
console.log(ran);


randomvals.forEach(showEven); // 짝수만 출력.

// 콜백함수.
function showEven(val){
    if (val % 2 == 0){
        console.log(val);
    }
}

console.log(-'3' * +4); '34' // : 숫자형 변환

console.log((3).toString());

console.log(Math.abs(-20));
console.log(Math.sign(30));

console.clear();
const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val){
    return Math.sign(val);
}); // 배열의 갯수만큼 콜백함수 실행 => 새로운 배열 반환

console.log(arr3);

// NAN, Infinity

console.log(3 / 'five');
console.log(1 / 0);
