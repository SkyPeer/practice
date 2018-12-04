let str  = '12323123123123';

console.log(str.length);
str.length = 5;
console.log(str.length)

console.log('----------------------------------------')

function f() {
    console.log('this: ',this);
    return false
}

console.log(new f);
console.log('----------------------------------------')

let obj = {
    a: 1,
    b: 2
};
let objArr = Object.keys(obj);
console.log(objArr, Array.isArray(objArr));

console.log('----------------------------------------');
let obj2 = obj;
obj2.a = 333;
console.log(obj);
console.log(obj2);

console.log('----------------------------------------');
function addTwo() {
    var n = 0;
    return function () {
        return n+=2;
    };
}
var f1 = addTwo();
console.log('f1(1) ', f1());
console.log('f1(2) ', f1());
console.log('----------------------------------------');

let arr2 = [8,2,3,5];
console.log(arr2.map((item)=>(item >= 0)));

console.log('----------------------------------------');
var aaa = 0b1001
    console.log(aaa);

console.log('----------------------------------------');

(function(arg) {console.log(arg)}('1233212'))
    

var b = a;
var a = 1
console.log(b)
var obj111 = { id: 1}
var obj222 = obj111
obj222.name = 'ivan';
console.log(obj111)

console.log('----------------------------------------');

function func(a) {
    var a = 2;
    return a;
    /*function (a) {
    return func() */
}
func.get = function (a) {
    return func()
};
console.log(func.get(5)) //2

console.log('----------------------------------------');

console.log({}=={}); //false , объекты сравниваются по другому var eq = Object.toJSON(user1) == Object.toJSON(user2); alert(eq); // gives true
console.log([1][0] == 1) // true
console.log(![] == []) //true
console.log([]==false) // true

console.log("2 == '2'", 2 == '2') // не строгое
console.log("2 === '2'", 2 === '2') // строгое!!!


console.log('----------------------------------------');
var testNum = 12
console.log(isNaN(testNum)) // false
console.log(isFinite(testNum)) // true

console.log(1/Infinity) //0
console.log(NaN + "1") // NaN1
console.log(-5/0) // -Infinity
console.log(0/0) // NaN
