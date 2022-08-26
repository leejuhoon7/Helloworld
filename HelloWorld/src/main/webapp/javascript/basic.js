

let student = {} // object
student.id = 'st1'
student.name = '홍길동';
student['score'] = 80;

console.log(student);

let numbers = []; //array
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 85;

for(let num of numbers){
    console.log(num);
}

let students =[];
let stu1 = {
    sno: '1001',
    sName: '김영희',
    score : 90
}

let stu2 = {
    sno: '1002',
    sName: '최희수',
    score : 80
}

let stu3 = {
    sno: '1003',
    sName: '박민수',
    score : 85
}

students[0] = stu1;
students[1] = stu2;
students[2] = stu3;


// 학생이름...출력
let str = '<ul>'
for(let stu of students){
    console.log('학생이름: ' + stu.sName + ', 점수:' + stu.score + ','
    + '학번' + stu.sno);
    str += '<li>' + '학생이름: ' + stu.sName + ', 점수:' + stu.score + ','
    + '학번' + stu.sno + '</li>'
}

str += '</ul>'
document.write(str);


