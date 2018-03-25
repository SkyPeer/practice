
var book = [];
var namesMap = {};
var telarray = [];

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
var a = tel;

    for (var i=0; i<book.length; i++ )
    {
        telarray = book[i].tels.split(',');
        console.log('telarray', telarray);

    //telarray.forEach(telFilter);
    var telarrayfiltered = telarray.filter(telFilter);
    console.log(telarrayfiltered);

    function telFilter(telnumb, index) {
        if (telarray == telnumb){
            var tags = telarray;
            return tags.indexOf(a) !== -1;
        }
    }

     /*   for (j=0; j < telarray; j++)
                {
                    if (telarray[j] = tel)
                    {
                        console.log('j',j);
                        telarrayfiltered.push(telarray[j]);
                        console.log('telarrayfiltered=', telarrayfiltered);
                    }
                } */
    book[i].tels = telarrayfiltered.join(',');
    }

};

add('Valya','74957654321');
add('Valya','32178840');
add('Ivan','74957654321');
add('Valya','32178840,3321231231');
add('Ivan','7444455');
add('Vadim','45678955');
add('Vadim','4567843335');
add('Vadim','45678957782325');
//console.log('result:', book);

remove('4567843335');
console.log(book);


