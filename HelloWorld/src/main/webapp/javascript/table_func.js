function makeTr(mem = {}) {
    let tr = '<tr>';
    // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>'
    return tr;
}


function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '확인'];
    let tr = '<tr>'

    for (let title of titles) {
        tr += `th${title}</th>`;
    }
    tr += '<td><button>확인</button></td>'
    tr = '</tr>'
    return tr;
}


const members = [{
        id: 'user1',
        name: '아빠오리',
        score: 100,
        phone: '010-1231-1234'
    },
    {
        id: 'user2',
        name: '엄마오리',
        score: 90,
        phone: '010-1231-1235'
    },
    {
        id: 'user3',
        name: '아기오리',
        score: 50,
        phone: '010-1231-1236'
    }
];

let str = '<table border = 4>';


str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>전화번호</th></tr>'
for (let member of members) {
    str += makeTr(member);

    // str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td><td>${member.phone}<td>`;

    str += '</tr>';
}

str += '</table>'
document.write(str);