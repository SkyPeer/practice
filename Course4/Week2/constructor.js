
function Cat(name) {
    this.name = name;
    return this
}
function Dog(name) {
    return { name: name };
}

function Fish(name) {
    this.name = name + ' new';
    return undefined;
    /*return { name: 'UHAAAAAA' }; */
}

var swittie41 = Cat.call({manya: 'haaaaaaaaaaaaaaaaaaa'},'vasya');

/*var misty = Cat('Misty'); //undefined */
/*var swittie = Cat.call('Swittie'); */
/*var chappie = new Dog('Chappie');
var guppie = new Fish('Guppie'); */

console.log('----------------');
/*console.log(misty); */
console.log('----------------');
/*console.log(swittie); */
console.log('----------------');
/*console.log(chappie);
console.log('----------------');
console.log(guppie);
*/
console.log('----------------------------------------------------------------------------------------------------------------');




function StudentConstructor(name) {
    this.name = name
}

function Test() {
    this.type='human';
}
StudentConstructor.prototype = Test;



var ivan = new StudentConstructor('ivan');

console.dir(ivan);
console.dir(ivan.constructor.name);

console.log(ivan.constructor === Test);


function Rabbit() {}

Rabbit.prototype = Test; // есть одно свойство: constructor

// оно равно Rabbit
console.log(Rabbit.prototype.constructor == Object); // true

console.log('----------------------------------------------------------------------------------------------------------------');

function Student(name) {
    this.name = name;
}

var billy = new Student('Billy')

console.log('1 ', Student.prototype.constructor.name === 'Student');
console.log('2 ', billy.constructor.name);
