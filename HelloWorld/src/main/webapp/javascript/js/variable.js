// variable.js

var age; // undefined. - 호이스팅.
// 전역변수, 지역변수


// ES6:
let name = 'Hong'; // 변수선언
fname = 'Hwang';
console.log(fname);

const PI = 3.14; // 상수선언: 재할당 불가.
// PI = 1.23; 

console.log(age);
// var age = 20; 

age = 20;

function localFnc(){
    // var age = 30;
    age = 35;
    console.log('지역변수: ' + age);
    age = 36;
    console.log('지역변수: ' + age);

    let fname = 'Kim';
    console.log(fname);
}



localFnc();

{
    let fname = 'park';
    console.log(fname);
    var age = 22; // 전역변수. 에러x
}


console.log('전역변수: ' + age);
console.log('전역변수: ' + fname);


console.log(window);
