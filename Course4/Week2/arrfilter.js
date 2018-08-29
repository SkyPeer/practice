



function arr(array, filterArg) {
    filterArg = filterArg - 1
    function arrFilter(item, index){
        /*filterArg = filterArg - 1; */
        return index != filterArg;
    }
    console.log(array.length)
    let newArr = array.filter(arrFilter);
    return newArr
}

console.log(' * newArr: ',arr([ 1 , 5 , 2 , 7 ], 4));
