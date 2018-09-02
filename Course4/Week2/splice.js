var array = [2, 5, 9];
console.log(array)
var index = array.indexOf(5);
if (index > -1) {
    array.splice(1, 1);
}
// array = [2, 9]
console.log(array)


var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("count: ",animals.length)
animals.splice(0,1);
console.log(animals)
// expected output: Array ["camel", "duck", "elephant"]