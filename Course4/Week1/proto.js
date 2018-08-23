/**
var student = {
    type: 'robot',
    name: 'Billy',
    raiting: undefined
};

var person =  {
        type: 'robot2',
        raiting: 50,
        age: 25

};
Object.setPrototypeOf(student, person);

console.log('Student:', student.name, ' , ', student.type);
console.log('Person:', person.name, ' , ', person.type);

console.log(student.age); //25
student.age = 27;
console.log(person.age); //25 эффект затенения
console.log("-----------------");
person.age = 27;
console.log(student.age); //27
console.log(person.age); //27
console.log("-----------------");
console.log(student.raiting);
*/

console.log("-----------------");

var student2 = {};
Object.prototype.serialize = function () {};
Array.prototype.serialize2 = function () {};
var student2new = {};

console.log('serialize' in student2);
console.log('serialize' in []);
console.log('serialize' in new Date());
console.log('serialize' in Object);
console.log('serialize' in Object.prototype);
console.log('serialize' in student2new);
console.log('serialize2' in Array.prototype);
console.log("-----------------");


console.log(Object.prototype.toString()); // [object Object]
var student3 = {name: 'agent007'};
var teacher3 = {name: 'TeacherOfAgent007'};
/* student3.toString = function () {return 'NOOOOOOOOOOOO'}; */
/* teacher3.toString = function () {return this.name}; */
teacher3.toString = function () {return 'UHAHAHAH'};
/*
for (var keys1 in student3){console.log('student3-keys:');console.log(keys1)} //[object Object]
for (var keys2 in teacher3){console.log('teacher3-keys:');console.log(keys2)}  //toString
*/
console.log(student3.toString()); //[object Object]
console.log(teacher3.toString()); // ' UHAHAHAH '
console.log(teacher3.toString.call(student3)); // ' UHAHAHAH '

/*
console.log("-----------------------------------------------");
var student4 = {
    name: 'Billy'
};
var person4 = {
    getName: function () {
        return this.name;
    }
};
console.log(person4.getName.call(student4));
console.log("--------------------------------------------------");
    */
console.log("--------------------------------------------------");
var student5 = {};
var person5 = {name: 'John', age:25};
Object.setPrototypeOf(student5, person5);
student5.name = "Mike";
student5.lastname = "Dow";
console.log(student5);
console.log(person5);

/*for (var student5keys in student5) {console.log(student5keys)}
console.log('  ');
for (var person5keys in person5) {console.log(person5keys)} */

console.log('  ');
console.log(student5.age);