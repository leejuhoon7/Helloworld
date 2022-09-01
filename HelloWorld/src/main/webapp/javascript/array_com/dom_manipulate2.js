const members = [{
        mid: 'admin',
        name: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'hong12',
        name: '홍길동',
        mphone: '010-2345-8765'
    },
    {
        mid: 'parkgr',
        name: '박규림',
        mphone: '010-9876-5432'
    }

]


document.addEventListener('DOMContentLoaded', function () {}); // dom요소에 이벤트 등록.

showMember();
// 등록버튼 이벤트.
let addBtn = document.querySelector('button');
addBtn.addEventListener('click', addMember)

// 회원찾기 이벤트.

let findBtn = document.getElementById('findMember');
findBtn.addEventListener('click', findMember);


// 초기화

let initial2 = document.getElementById('initial')
initial2.onclick = () => location.reload()

// 아이디 찾은 후 이름 연락처 변경.

let updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', updateId)






function findMember() {
    let id = document.getElementById('mid').value;
    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); // NodeList [tr, tr, tr]
    trs.forEach(tr => {
        tr.className = '';
        console.log(tr.firstElementChild.textContent);
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
        }
    });
}

function updateId() {
    let id = document.getElementById('mid').value;
    let trs = document.querySelectorAll('tbody>tr');

    trs.forEach(tr => {
        if (tr.firstElementChild.textContent == id) {
            tr.children[1].textContent = document.getElementById('mname').value;
            tr.children[2].textContent = document.getElementById('mphone').value;
            console.log(tr.firstChild.nextElementSibling);
        }
    })

}


function showMember() {
    // 리스트 보여주기.
    let table = document.getElementById('list');
    members.forEach(member => {

        let mvalues = [];
        // object -> array.
        for (let prop in member) {
            mvalues.push(member[prop]);
        }
        mvalues = Object.values(member); // Object.keys(member): [속성, 속성]
        let tr = makeTr(mvalues);
        table.appendChild(tr); // <table><tr><td><button>삭제</button></td></tr></table>
    });
}

function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning.
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!');
        return;
    }

    const mvalues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mvalues);
    document.getElementById('list').appendChild(tr);

    //초기화

    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

} // end of addMember().

function makeTr(mvalues = []) {
    let tr = document.createElement('tr');
    tr.addEventListener('click', function () {

        document.getElementById('mid').value = this.firstElementChild.innerText
        document.getElementById('mname').value = this.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        document.getElementById('mphone').value = this.lastElementChild.previousElementSibling.previousElementSibling.innerText

        console.log(this.firstElementChild.nextElementSibling.nextElementSibling.innerText); // <td><button><user1></button></td>
    }, false);
    // document.getElementById('mid').value = this.firstElementChild.innerText; 



    mvalues.forEach(val => {

        let td = document.createElement('td'); // id 위치 <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });





    // 삭제버튼 추가.

    let td = document.createElement('td'); //<td></td>
    let btn = document.createElement('button'); // <button>삭제</button>
    let txt = document.createTextNode('삭제');
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); // tr삭제.
        e.stopPropagation(); // 이벤트 전파

    }, false);

    btn.appendChild(txt);
    td.appendChild(btn); // <td><buttton>삭제</button></td>
    tr.appendChild(td); //<tr><td><button>삭제</button></td></tr>

    // 체크박스 추가.

    

    let td2 = document.createElement('td');
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox');

    td2.appendChild(check);
    tr.appendChild(td2);

    return tr;

}