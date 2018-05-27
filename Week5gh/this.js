// простой вызов функции
/*
function f() {
    console.log('THIS:',this === global); // true
}
f();
*/

console.log('------------------------------------');

//самовызывающаяся функция
/*(function () {
    console.log('THIS:',this === global); // true
})(); */
console.log('------------------------------------');

//меняем контектст исполнения call/apply
function f1() {
    x1 = 255;
    console.log('THIS ==== global :',this === global);
    console.log('this a1:', this.a1);
    console.log('this x1:', this.x1);
    console.log('------------------------------------');
   // return this;
}

// вызываем как метод объекта, this указывает на сам этот объект
var o0 = {
    x1: 105,
    a1: 1024,
    o0f1: f1
};

f1.call(o0);  /* тоже самое что вызвать функцию как метод из объекта*/o0.o0f1();
f1();

// --------------------------------
var o2 =
    {
        a2: 154,
        f2: function () {
            console.log('a2 =', this.a2)}
    }

var o3 =
    {
        a2: 254,
        o3f2: o2.f2
    };

    o2.f2(); // a2 = 154
    o3.o3f2();  // a2 = 254
    o2.f2.call(o3); // a2 = 254
console.log('------------------------------------');




