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

//вызов с конструктором
//При вызове функции с использованием ключевого слова new функция выступает в роли конструктора, и в данном случе this указывает на создаваемый объект.
function f1() {
    this.x1 = 255;
    console.log('THIS ==== global :',this === global);
    console.log('this a1:', this.a1);
    console.log('this x1:', this.x1);
   // return this;
}

// вызываем как метод объекта, this указывает на сам этот объект
var o0 = {
    x1: 105,
    yo: f1,
    a1: 1024
}
//console.log('o0.you() : ', o0.yo())

//console.log('f1',f1())
// --------------------------------

var o1 = new f1();  console.log('o1.x1 :',o1.x1, o1.a1);



