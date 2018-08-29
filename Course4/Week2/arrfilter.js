    let arr = [ 1 , 5 , 2 , 5 ];

function arrFilter (){
    console.log(arguments);
    return true;
}
let newArr = arr.filter(arrFilter());
console.log('newarr:', newArr)