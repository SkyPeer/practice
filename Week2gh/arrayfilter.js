
var array = ['a', 'b', 'c', 'd'];
var arrayfiltered =[];

function remove(letter) {

    arrayfiltered = array.filter(filter);
//    console.log(arrayfiltered)
    
    function filter(value) {return value != letter}

}
console.log(array);
remove('c');
console.log(arrayfiltered);