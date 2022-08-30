// 객체 : {name: "홍길동", age: 20, showAge: function(){ .... }}

class Student {
    // 속성을 정의불가.

    // 생성자
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    setGrade(grade){
        this.grade = grade;
    }

    showInfo(){
        return `이름은 ${this.name}이고 학번은 ${this.sno} 입니다.`
    }

    
}

let s1 = new Student('st1', '홍길동');
console.log(s1.sno);
s1.setGrade(3);
console.log(s1.grade);

let s2 = new Student('st2', '김민식');
s2.setGrade(2);

s1.phone = '010-1111-2222';

const Students = [s1, s2, new Student('st3', '최홍식')];
Students.forEach(Student => console.log(`이름: ${Student.name}, 학년: ${Student.grade}, 연락처: ${Student.phone}`));
Students.forEach(Student => console.log(Student.showInfo()));
