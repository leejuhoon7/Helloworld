// foreach.js

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

// for 반복문. 배열메소드(forEach)

// let str = '<table border =1>'
// str += '<tr style = " color : grey"><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>'

// members.forEach(function(val, index, ary) =>{
//     if(val.gender == 'M'){
//         str += makeTr(val, 'blue');
//     } else if(val.gender == 'W'){
//         str += makeTr(val, red);
//     }
// });



function makeTr(mem = {}) {
    let tr = '<tr>';
    // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>'
    return tr;
}

