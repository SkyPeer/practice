function Cat(name) {
    this.name = name;
}

function Dog(name) {
    return { name: name };
}

function Fish(name) {
    this.name = name + ' new';
    return undefined
    /*return { name: 'UHAAAAAA' }; */
}

var misty = Cat('Misty'); //undefined
var swittie = new Cat('Swittie');
var chappie = new Dog('Chappie');
var guppie = new Fish('Guppie');

console.log('----------------');
console.log(misty);
console.log('----------------');
console.log(swittie);
console.log('----------------');
console.log(chappie);
console.log('----------------');
console.log(guppie);
console.log('----------------');