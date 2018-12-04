let str  = '12323123123123';

console.log(str.length);
str.length = 5;
console.log(str.length)

function f() {
    console.log('this: ',this);
    return false
}

console.log(new f);
