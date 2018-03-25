
var book = [];
var namesMap = {};

function add(name, tel){

//console.log('try add:', name,'',tel);

    if (book.length == 0 ) {
        console.log('book clear');
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
console.log(namesMap);
}


add('Valya','74957654321');
add('Valya','32178840');
add('Ivan','74957654321');
add('Valya','32178840,3321231231');
add('Ivan','7444455');
add('Vadim','45678955');
console.log('result:', book);




