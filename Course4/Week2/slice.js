var array = [2, 5, 9];
console.log(array)
var index = array.indexOf(5);
if (index > -1) {
    array.splice(2, 1);
}
// array = [2, 9]
console.log(array);