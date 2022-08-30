
let items = '스타벅스 투썸플레이스 이디야 엔젤리너스 메가커피 청솔로 카페베네 더벤티 ';

let bdy = document.querySelector('body'); // body태그 찾아서 bdy변수할당.
let div = document.createElement('div'); // div element 생성.
bdy.append(div); // body 

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); //<span></span>
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
btn.onclick = function() {
    // 버튼을 클릭하면...
    let findword = inp.value;
    let spans = document.querySelectorAll('span');
    
    // console.log(findword); // 찾으려고 하는 단어
    // console.log(spans);

    spans.forEach(function(span){
        // <span>Lorem, </span> <span>ipsum</span>
        // findword == span.innerText => span.remove();
      
        if(findword == span.innerText){
            span.remove();
        }
         document.querySelector('input').value ='';
         document.querySelector('input').focus();       

    });
}


document.querySelector('div').after(inp, btn);
