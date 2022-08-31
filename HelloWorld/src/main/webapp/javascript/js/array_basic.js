

// 배열에 요소추가/ 삭제
// push() : 마지막 추가. pop() : 마지막 제거.
// unshift() : 첫번째 추가. shift() : 첫번째 제거
// slice(findex, lastindex);
// splice(위치, 대체할 갯수, 대체할 값...) : 추가, 수정, 삭제


const names = [];

names[0] = '이현성';
names[names.length] = '백진희'; // 
names[names.length] = '황용주';
names[names.length] = '손정빈';


 
// names.push('이현성!!');
// names.unshift('이현성악마!!');
// names.shift('이현성악마!');
// names.shift('이현성');
// names.pop("이현성!!");

const newNames = names.slice(0, 2); // 백진희, 황용주
console.log(newNames);

names.splice(1, 1, '상영쌤!');
// names.splice(0, 1, '이주훈');

console.log(newNames);





names.forEach(name => {
    console.log(name);
})

