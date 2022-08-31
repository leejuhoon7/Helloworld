// charAt(index) => 문자 반환.

console.log('World'.charAt(3));

function checkGender(no) {
    if (no.charAt(6) == 1,3 || no.charAt(7) == 1 , 3) {
        console.log('남자입니다.')
    } else if (no.charAt(6) == 2 || 4 || no.charAt(7) == 2 || 4){
        console.log('여자입니다.')
    } else 
        console.log('괴물입니다.')


}
let a = '9703011345678';
console.log(a.charAt(6) );
checkGender('970301-2345678');
checkGender('970301-1345678');
checkGender('9703011345678');
checkGender('9703013345678');
checkGender('970301-4345678');
checkGender('-1-1-1-1-1-1-1-1-1');


