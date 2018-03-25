
var book = [];
var namesMap = {};
var result = [];

function add(name, tel){
    if (book.length == 0 ) {
        book.push({name: name, tels: tel});
        namesMap[name] = true;
    }
    else {

        if (!namesMap.hasOwnProperty(name))
        {
           book.push({name: name, tels: tel});
           namesMap[name] = true;
        }

            else
                for (var i = 0; i < book.length; i++) {

                    {
                    if (book[i].name == name) {
                        book[i].tels = book[i].tels + ',' + tel;}
                    }
                }
    }
}


function remove(tel) {
    var telarray = [];
    for (var i=0; i<book.length; i++ )
    {telarray = book[i].tels.split(',');

    var telarrayfiltered = telarray.filter(function (telnum) {return telnum != tel});

    book[i].tels = telarrayfiltered.join(',');

    }

}

function show()
{
    for (var i=0; i<book.length; i++)
    {
        if (book[i].tels !== '')
        {
            result.push(book[i].name+':'+' '+book[i].tels);
        }

    }
    console.log('result',result.sort());
}
add('Peter','779222222222');
add('Valya','74957654321');
add('Valya','32178840');
add('Valdemar','7495765432100');
add('Valya','32178840,3321231231');
add('Valdemar','7444455');
add('Vadim','45678955');
add('Vadim','4567843335');
add('Vadim','45678957782325');
console.log('result:', book);

console.log('-----------------------------------');

console.log('After remove');
remove('4567843335');
remove('779222222222');
console.log(book);
console.log('-----------------------------------');

show();


