// element생성 : createElement()
// textNode생성 : createTextNode()
// 부모-자식 형성 : appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
frm.setAttribute('method', 'post');


// 자식요소(label)
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자아이디';
frm.appendChild(labelId);



let inputid = document.createElement('input');
inputid.setAttribute('type', 'text');
inputid.setAttribute('name', 'user_id');
inputid.setAttribute('id', 'user_id');
frm.appendChild(inputid);

let bbr=document.createElement('p');
inputid.after(bbr);


let labelPw = document.createElement('label');
labelPw.setAttribute('for', 'user_Pw');
labelPw.innerText = '사용자비밀번호';
frm.appendChild(labelPw);


let inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'user_Pw');
inputPw.setAttribute('Pw', 'user_Pw');
frm.appendChild(inputPw);



let button = document.createElement('button');
button.innerText = '로그인';
frm.appendChild(button);

 bbr=document.createElement('p');
inputPw.after(bbr);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm);
console.log(frm);