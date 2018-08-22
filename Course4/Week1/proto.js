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

console.log("-----------------");
var student = {};
Object.prototype.serialize = function () {};

console.log('serialize' in student);
console.log('serialize' in []);
console.log('serialize' in new Date());
console.log('serialize' in Object);
console.log('serialize' in Object.prototype);