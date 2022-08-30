
let str = 'Hello Father Duck!';

console.log(str.slice(2, 7)); // index:2(include) ~ index:7(exclude)
console.log(str.slice(2)); // index : 2 ~ 끝까지.
console.log(str.slice(2, -2)); // index:2 ~ index:12 (14-2) 
console.log(str.slice(-2)); // index: (14-2)

console.log(str.substring(0, 7));
// substr(3, 5); index:3부터 5문자

// 문자열을 찾아서 해당되는 인덱스를 반환.
console.log(str.indexOf('Fat'));
console.log('Hello Father Duck, Hello Mother Duck.'.indexOf('Duck'));

str = 'Good Morning, Good Afternoon, Good Evening';

let position = str.indexOf('Good', str.indexOf('Good') + 1); // => 0
console.log(position); // 두번쨰 Good 문자 있는 위치 인덱스.


// 문자열에서 반복되는 구문의 횟수.
let cnt = 0;
let pos = str.indexOf('Good');

while (pos != -1){
    cnt++;
    pos = str.indexOf('Good', pos + 1);

}

console.log(cnt + '회');

const members = [
    {name:"황병걸", age:25},
    {name:"김효인", age:22},
    {name:"이상욱", age:18},
    {name:"최근석", age:29}
]

let searchKey = prompt('찾을 이름을 입력'); 

// members 배열에서 searchKey 을 찾아서 나이 콘솔에 출력.

// for(member of members){
//     if(member.name == searchKey){
//         console.log(member.name + '의 나이는 '+ member.age+'살');
//     } 
// }

// 교수님 방식!
members.forEach(member =>{
    if(member.name.includes(searchKey)){
        console.log(member.name + '은 ' + member.age + '살 입니다.');
    }
})