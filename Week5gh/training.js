// example 1
/*function  User() {
    return{
        age: 33,
            showAge: function () {
                console.log(this.age);
            }
    }
}
var mike = new User()
mike.showAge();
*/

// example 2
/* console.log(this.innerHeight,'x',this.innerWidth) // in Bowser
 // console.log(this.process.version); // in NodeJS !!!
 this.innerHeight //569 // in BROWSER
*/

//example 3 module
/*
var todayModule = require('./training_module');
console.log('todayModule.date', todayModule.date);
console.log('todayModule.thisDateNow:', todayModule.thisDateNow);
*/

// exmaple in Browqer
/*
 var block = {
 innerHeight: 300,

 getHeight: function () {
 return this.innerHeight;
 }
 };

 console.log(block.getHeight());
 var getHeight = block.getHeight;
 console.log(getHeight()); // work in browser!!!
 */

// exmaple  Call
/*
var mike =
    {
        age: 24,
        getAge: function () {
            console.log('this.age:', this.age);
            console.log('mike.age:', mike.age);
            return this.age

        }
    }
var anna =
    {
        age: 21
    }

var callResult = mike.getAge.call(anna);
console.log('callResult',callResult);
*/

//example   Apply
/*
console.log(Math.min(4, 7, 2, 9)); // 2
var arr = [4, 7, 2, 9];
console.log(Math.min(arr)); // NaN;
console.log(Math.min.apply(Math,arr)); //2
console.log(Math.min.apply(null,arr)); //2
console.log(Math.min.apply(0,arr)); //2
*/


// tasks
//1
var title = 'Гарри Поттер и тайная комната';
var book = {
    title: 'Война и мир',
    getTitle: function() {
        return this.title;
    }
};
console.log(book.getTitle()); //'Война и мир',

//2
var apple = { color: 'green' };
var lemon = {
    color: 'yellow',
    getColor: function () {
        console.log(this.color);
    }
};
lemon.getColor.call(apple); // green


//3
function getSum(a, b, c) {
    return a + b + c;
}
console.log(getSum.apply(this, [1, 2, 3]))


function func() {
    console.log(arguments);
    var args = [].slice.call(arguments);
return args
}
console.log(func(1, 5));

var array = [1, 2, 3];
var newArray = array.slice();
//console.log(newArray);

var name = 2;
var person = {
    name: 'Sergey'  ,
    items: ['keys', 'phone', 'banana'],
    showItems: function () {
        this.name = '1';
        this.items.map(function (item) {
            return this.name + ' has ' + item;
        });
    }
};
person.showItems();


Function.prototype.myBind = function(_this) {
    var fn = this;
    var args = [].slice.call(arguments, 1);
    return function() {
        var curArgs = [].slice.call(arguments);
        return fn.apply(_this, args.concat(curArgs));
    };
};



function Callback(item) {
    return this.name + ' has ' + item;
}


var person = {
    name: 'Sergey',
    items: ['keys',
        'phone',
        'banana'
    ],
    showItems: function() {
        let cbBinded = Callback.myBind(this);
        this.items.map(cbBinded);



    }
}
person.showItems();


