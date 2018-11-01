function arr(array, filterArg) {
    filterArg = filterArg - 1
    function arrFilter(item, index){
        /*filterArg = filterArg - 1; */
        return index != filterArg;
    }
    console.log('array.length', array.length)
    let newArr = array.filter(arrFilter);
    return newArr
}

console.log(' * newArr: ',arr([ 1 , 5 , 2 , 7 ], 3));

let arr2 =
    [
        {ticket: 111, sc: 1},
        {ticket: 222, sc: 1},
        {ticket: 333, sc: 1},
        {ticket: 454, sc: 2},
        {ticket: 464, sc: 2},
        {ticket: 474, sc: 3}
    ]
/*function arr2filter(item, arg) {
    return item[sc] = arg
}*/

let arr2filtered = arr2.filter(item => item.sc == 3)

console.log('arr2filtered: ', arr2filtered)

console.log('arr2filtered.map', arr2filtered.map(ticket=>{
    return ticket.ticket
}) )
