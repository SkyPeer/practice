
var testArray = [1,3,5,54,3,1,23,231]

function printif1 (element)
{
return elemen = 1;
}
console.log(testArray.some(printif1)); //true


var arr = [100, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее

function arrsum (sum, current) {
    console.log('sum=',sum,'current=',current)
    return sum + current;

}
console.log( arr.reduce(arrsum) ); // 15

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
    console.log('sum=',sum,'current=',current)
    return sum + current;
}, 0);

console.log( result ); // 15



var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
});