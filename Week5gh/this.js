function f() {
    console.log('THIS:',this === global); // true
}
f(); // простой вызов функции


//самовызывающаяся функция
(function () {
    console.log('THIS:',this === global); // true
})();






//вызов с конструктором
//При вызове функции с использованием ключевого слова new функция выступает в роли конструктора, и в данном случе this указывает на создаваемый объект.
function f() {
    this.x = 5;
    console.log('THIS:',this === global); // false
    console.log('this a:', this.a);
}


// вызываем как метод объекта, this указывает на сам этот объект
var o0 = {
    a: 5,
    yo: f
}
console.log('o0.you() : ', o0.yo())
// ----------
var o = new f();
console.log('o.x :',o.x); // 5





