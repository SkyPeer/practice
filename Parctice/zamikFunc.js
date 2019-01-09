var name = "Chrome"

function makeFunc() {
    var name = "Mozilla";
    function displayNameFunc() {
       console.log(name);
    }
return displayNameFunc;
};

var myFunc = makeFunc();
myFunc();

var obj1 = {a:1, b: obj2}
var obj2 = {a:2, b: obj1}

obj1 = obj2 = null

console.log(obj1)
console.log(obj2)

/* -------------------------- */

var name1 = 'Hello world'

var newObj  = {
    name1: 'Goody',
    namefunc: function(){console.log('this.name1 = ', this.name1)}
}

newObj.namefunc()
var fooo = newObj.namefunc
console.log('fooo()', fooo())