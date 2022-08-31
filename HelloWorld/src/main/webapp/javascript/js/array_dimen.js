

const members = [
    ['홍길동', 20],
    ['김익수', 21],
    ['손봉소', 22]
]

members.push(['도소람', 23]);
members[0][1] = 22;

const objMembers = [
   
];


members.forEach(member =>{
    let obj = {
        name : member[0],
        age : member[1]
    }
    objMembers.push(obj);
})

console.log(objMembers);





// objMembers.forEach(objMember =>{
//     console.log(`이름: ${objMember['name']}, 나이: ${objMember['age']}`);
// })
const aryMembers = [];

objMembers.forEach(member =>{

    let arrayName = [member.name ,member.age];
    aryMembers.push(arrayName);

   

  

})



console.log(aryMembers);


// console.table(members);