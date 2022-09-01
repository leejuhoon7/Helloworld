// document.querySelectorAll('button');
const members = [{
        mid: 'admin',
        name: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'hong12',
        name: '홍길동',
        mphone: '010-5555-4455'
    },
    {
        mid: 'parkkr',
        name: '관리자',
        mphone: '010-7777-8822'
    }
]

document.addEventListener('DOMContentLoaded', function () {
    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addMember)

    // 회원찾기 이벤트.
    let findBtn = document.getElementById('findMember')
    findBtn.addEventListener('click', findMember);

    // 정보수정 이벤트.
    let updateBtn = document.getElementById('update')
    updateBtn.addEventListener('click', updateMember)

    // 전체석택/해제 이벤트.
    let allCheck = document.getElementById('allCheck')
    allCheck.addEventListener('change', allChecked)
}); // dom요소에 이벤트 등록.

function allChecked() {
    // true/ false 같은 this의 checked 값을 할당.
    let chks = document.querySelectorAll('tbody input[type="checkbox"');
    chks.forEach(check => {
        // check.checked = this.checked;
        if (check.checked == this.checked == false) {
            check.checked = this.checked;
        } else {
            if (this.checked == false) {
                check.checked = true;
            } else {
                check.checked = false;
            }
        }
    });
};

// 회원수정.
function updateMember() {
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
// 회원찾기.
function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value;
    let name = document.getElementById('mname').value;
    let phone = document.getElementById('mphone').value;

    // let trs = document.getElementsByTagName('tbody')[0].children; // 아래구문과 같음.
    let trs = document.querySelectorAll('tbody>tr');
    console.log(trs) // NodeList [tr, tr, tr]
    trs.forEach(tr => { // 클래스 네임을 초기화 시켜주는 반복문.
        // tr.className = ''; // 이렇게 쓰면 class라는 속성은 남아있어 지저분하다.
        // tr. setAttribute('class', ''); // 이렇게 쓰면 class라는 속성은 남아있어 지저분하다.
        tr.removeAttribute('class'); // class라는 속성이 사라진다.
    });
    trs.forEach(tr => { // 클래스 네임을 주어 스타일을 적용시키는 반복문.
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
        }
    });
};


// 테이블에 기본으로 등록된 멤버 리스트 보여주기
function showMember() {
    let table = document.getElementById('list');
    members.forEach(member => {
        let mValues = [];
        for (let prop in member) {
            mValues.push(member[prop]);
        }
        mValues = Object.values(member); // Object.keys(member):[속성, 속성]
        let tr = makeTr(mValues);
        table.appendChild(tr);
    });
}
showMember();

// 멤버등록.
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

    const mValues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mValues);

    document.getElementById('list').appendChild(tr);

    //초기화

    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

} // end of addMember().

function makeTr(mValues = []) {
    let tr = document.createElement('tr');

    tr.addEventListener('click', function () {
        // alert(this.firstElementChild.innerText); // <td><button>user1</button></td>
        document.getElementById('mid').value = this.firstElementChild.innerText; // id
        document.getElementById('mname').value = this.firstElementChild.nextElementSibling.innerText;
        document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    }, false); // 디폴트 값 false. true로 바꾸면 팝업도 뜨고 삭제도 된다. 찾는 순서 때문에.
    mValues.forEach(val => {
        let td = document.createElement('td');
        let txt = document.createTextNode(val); // admin 관리자 연락처. 이런식으로 나옴
        td.appendChild(txt);
        tr.appendChild(td);
    });
    // 새로 등록된 멤버에도 삭제 버튼 추가.
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let txt = document.createTextNode('멤버삭제');
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); //tr삭제.
        e.stopPropagation(); // 이벤트 전파 차단.
    }, false); // 디폴트 값 false. 

    btn.appendChild(txt);
    td.appendChild(btn); //<td><button>멤버삭제</button></td>
    tr.appendChild(td); //<tr><td><button>멤버삭제</button></td></tr>

    // 체크박스 추가.
    let cdTd = document.createElement('td');
    let cb = document.createElement('input');
    cb.setAttribute('type', 'checkbox');
    cb.addEventListener('change', function (e) {
        // tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();
    })

    cdTd.appendChild(cb);
    tr.appendChild(cdTd);

    return tr;
}