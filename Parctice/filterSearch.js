let phones = [
    {title:'iPhone 7', company:'Apple'},
    {title:'iPhone 6S', company:'Apple'},
    {title:'Galaxy S8', company:'Samsung'},
    {title:'Galaxy S7 Edge', company:'Samsung'},
    {title:'Nokia N8', company:'HMD Global'}
    ]


 /*   console.log(phones) */
console.log('------------------------------')

/*var arg = 'Samsung'

filteredList = function(){
    var comp = arg;
    return phones.filter(function (elem) {

        if(comp==='') return true;
        else return elem.company.indexOf(comp) > -1;
    })
}

console.log(filteredList())*/


/*console.log('-------------------------------------------')
console.log(phones.match('sam'))*/
console.log('-------------------------------------------')

var searchArg='al'
var pattern = new RegExp(searchArg, 'i')
console.log('searhArg = ',searchArg)

    /*for (var i=0; i<phones.length; i++){
        if (phones[i].title.match(pattern)  || phones[i].company.match(pattern) ){
            console.log(phones[i], )
        }
    } */

let filteredArray = phones.filter(item => {
    return item.title.match(pattern) || item.company.match(pattern)
})

console.log(filteredArray)

console.log('-------------------------------------------')
