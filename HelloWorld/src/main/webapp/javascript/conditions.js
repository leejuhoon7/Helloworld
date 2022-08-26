// conditions.js

const members = [{
        id: 'user1',
        name: '아빠오리',
        score: 100,
        phone: '010-1231-1234',
        gender: 'M'
    },
    {
        id: 'user2',
        name: '엄마오리',
        score: 90,
        phone: '010-1231-1235',
        gender: 'W'
    },
    {
        id: 'user3',
        name: '청년오리',
        score: 75,
        phone: '010-1231-1237',
        gender: 'M'
    },
    {
        id: 'user4',
        name: '아기오리',
        score: 50,
        phone: '010-1231-1236',
        gender: 'M'
    },
];


// 테이블형식(표) =>
// 성별 : 남자 => 파란색 글씨, 여자 => 빨간색 글씨

//makeTr(파란색, 빨간색) /makeBlueTr(), makeRedTr()


let str = '<table border = 1>'

str += '<tr style = " color : grey"><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>'

for (let member of members) {

    if (member.gender == 'M')
        str += `<tr style= "color : blue">`;
    else
        str += `<tr style= "color : red">`;
    str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>
    <td>${member.phone}</td><td>${member.gender}</td>`

    str += '</tr>'
}

str += '</table>'

document.write(str);




// const passMember = [];

// for(let i=0; i<members.length; i++){
//     if(members[i].score > 60){
//         console.log('이름:' + members[i].name);
//         passMember[passMember.length] = members[i].name;
//     }
// }
// console.log(passMember);

// const women = [];
// for (let member of members){
//     if(member.gender == 'w'){
//         women[women.length] = member;
//     }
// }