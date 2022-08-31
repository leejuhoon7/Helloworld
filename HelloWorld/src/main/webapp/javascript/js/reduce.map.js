// Array.prototype.map(); => 매핑(A -> A')
// Array.prototype.filter(); => 필터링(A -> a)

const names = ['이현성', '이주훈', '황용주', '최승성'];

let members = names.map((name, idx) => {
    let obj = {}
    obj.name = name;
    obj.sno = idx + 1; // {name: '이현성', sno: 1}
    return obj;
});

console.log(members);


let lees = members.filter(mem => {
    return mem.name.startsWith('이');
})

console.log(lees);

// let membersF = members.filter(find => {
//     //return true이면 그걸 반환해줌
//     find.name.start
//     return '이' == find.name.slice(0,1)
// })  

// console.log(membe);


// reduce로 map과 같은 기능 구현.
let membert = names.reduce((acc, val, idx) => {
    let obj = {}
    obj.name = val;
    obj.sno = idx + 1
    acc.push(obj); // [{name: '이현성', sno: 1}, {name: '이주훈', sno: 2}, ...]

    return acc;

}, []);

console.log(membert);


// reduce로 filter와 같은 기능 구현.

// members = names.reduce((acc, val, idx) => {
//     let obj = {};
//     obj.name = val;
//     obj.sno = idx + 1;
//     acc.push(obj);

//     return acc;
// },[])

let seong = membert.reduce(function (acc, val)  {
    if(val.name.slice(-1) == '성'){
        acc.push(val);
    }
    return acc;
},[])




console.log(seong);

