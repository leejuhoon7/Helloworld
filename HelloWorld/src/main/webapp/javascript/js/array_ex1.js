
const data = `[{"id":1,"first_name":"Jack","last_name":"Ginnell","email":"jginnell0@sbwire.com","gender":"Male","salary":32},
{"id":2,"first_name":"Sophey","last_name":"Fabbri","email":"sfabbri1@dyndns.org","gender":"Female","salary":20},
{"id":3,"first_name":"Cchaddie","last_name":"Balffye","email":"cbalffye2@state.gov","gender":"Male","salary":72},
{"id":4,"first_name":"Theodosia","last_name":"Darycott","email":"tdarycott3@noaa.gov","gender":"Female","salary":58},
{"id":5,"first_name":"Odilia","last_name":"Ubee","email":"oubee4@topsy.com","gender":"Female","salary":79},
{"id":6,"first_name":"Mick","last_name":"Alfonzo","email":"malfonzo5@jigsy.com","gender":"Male","salary":80},
{"id":7,"first_name":"Vanda","last_name":"McCrackan","email":"vmccrackan6@nytimes.com","gender":"Female","salary":24},
{"id":8,"first_name":"Kerrill","last_name":"Palke","email":"kpalke7@ted.com","gender":"Genderqueer","salary":78},
{"id":9,"first_name":"Tommie","last_name":"Surmeyers","email":"tsurmeyers8@opera.com","gender":"Male","salary":1},
{"id":10,"first_name":"Kellina","last_name":"Zollner","email":"kzollner9@alibaba.com","gender":"Female","salary":26},
{"id":11,"first_name":"Phil","last_name":"Keig","email":"pkeiga@nymag.com","gender":"Male","salary":55},
{"id":12,"first_name":"Arliene","last_name":"Elston","email":"aelstonb@princeton.edu","gender":"Female","salary":97},
{"id":13,"first_name":"Garold","last_name":"Schops","email":"gschopsc@ask.com","gender":"Male","salary":3},
{"id":14,"first_name":"Dew","last_name":"Karel","email":"dkareld@bluehost.com","gender":"Male","salary":25},
{"id":15,"first_name":"Rosalyn","last_name":"Cardoo","email":"rcardooe@fastcompany.com","gender":"Female","salary":65}]`;

let result = JSON.parse(data); // string -> object

// result.array.forEach(element => {
//     console.log(element.first_name);
// });

// 성별이 Female이고 salary 5000이상(50이상)인 사람.

result.forEach(member =>{
    if(member.gender == 'Female' && member.salary >= 50){
        let result1 = member;
    }
})

console.log(result1);

let str;

document.write(str); // <ul><li>15 Rosalyn Cardoo 65</li></ul>