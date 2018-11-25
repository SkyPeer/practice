var phones = [
    {title:'iPhone 7', company:'Apple'},
    {title:'iPhone 6S', company:'Apple'},
    {title:'Galaxy S8', company:'Samsung'},
    {title:'Galaxy S7 Edge', company:'Samsung'},
    {title:'Nokia N8', company:'HMD Global'}
    ]


 /*   console.log(phones)*/
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

var searchArg='a'
var pattern = new RegExp(searchArg, 'i')
console.log('searhArg = ',searchArg)
for (var i=0; i<phones.length; i++){
    if (phones[i].company.match(pattern) /*  /sa/i  */){
        console.log(phones[i], )
    }
}

console.log('-------------------------------------------')

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lest. Donec convallis dignissim ligula, et rutrum est elat vistibulum eu.';

// Подойдут оба и "elit", и "elat". Точка означает, что подойдет любой символ.

var regex = /e./g;

console.log( text.match(regex) );


// "est" и "lest" одинаково подойдут. Знак вопроса делает "l" необязательной.

var regex2 = /l?est/g;

console.log( text.match(regex2) );