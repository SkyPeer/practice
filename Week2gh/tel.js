
var book = [];
var namesMap = {};


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
    var removeresult = false;
    var telarray = [];
    for (var i = 0; i < book.length; i++ )
    {
        telarray = book[i].tels.split(',');
        var telarrayfiltered = telarray.filter(function (telnum) {return telnum != tel});

        book[i].tels = telarrayfiltered.join(',');
        if (telarray.length != telarrayfiltered.length){removeresult = true}
    }
    return removeresult;
}

function show() {
    var result = [];
    for (var i=0; i<book.length; i++)
    {
        if (book[i].tels !== '')
        {
            result.push(book[i].name+':'+' '+book[i].tels);
        }
    }
   return result.sort();
}

function phoneBook(cmd) {
var commandArray = cmd.split(' ');
//console.log(commandArray);

    if (commandArray[0] == 'ADD')
    {
    console.log('CMD:',commandArray[0],' name:',commandArray[1],' tels:', commandArray[2]);
    add(commandArray[1],commandArray[2])
    }

    if (commandArray[0] == 'REMOVE_PHONE')
    {
        console.log('CMD:',commandArray[0],' tel:', commandArray[1]);
        console.log('remove result:', remove(commandArray[1]));
    }

    if (commandArray[0] == 'SHOW')
    {
        console.log(show());
    }

}

/*
add('Ivan', '555-10-01,555-10-03');
add('Ivan', '555-10-02');
console.log(show());
console.log(remove('555-10-03'));
add('Alex', '555-20-01');
console.log(show());
console.log(remove('555-20-01'));
console.log(show());
*/


phoneBook('ADD Ivan 555-10-01,555-10-03');

phoneBook('ADD Ivan 555-10-02');

phoneBook('SHOW');

// Вывод:

// ["Ivan: 555-10-01, 555-10-03, 555-10-02"]

phoneBook('REMOVE_PHONE 555-10-03');

phoneBook('ADD Alex 555-20-01');

phoneBook('SHOW');

// Вывод:

// ["Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"]

phoneBook('REMOVE_PHONE 555-20-01');

phoneBook('SHOW');

// Вывод:

// ["Ivan: 555-10-01, 555-10-02"]