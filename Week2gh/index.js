// Телефонная книга
var book = [];
var namesMap = {};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

    function add(name, tel) {
        if (book.length == 0) {
            book.push({name: name, tels: tel});
            namesMap[name] = true;
        }
        else
        {
            if (!namesMap.hasOwnProperty(name)) {
                book.push({name: name, tels: tel});
                namesMap[name] = true;
            }
            else
            {
                for (var i = 0; i < book.length; i++)
                {
                    if (book[i].name == name)
                    {
                        if (book[i].tels.length == 0) {book[i].tels = book[i].tels + tel}
                        else {book[i].tels = book[i].tels + ',' + tel}
                    }
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
        var telsShowArray=[];
        var result = [];
        for (var i=0; i<book.length; i++)
        {
            if (book[i].tels !== '')
            {
                telsShowArray = book[i].tels.split(',')
                result.push(book[i].name+':'+' '+telsShowArray.join(', '));
            }
        }
        return result.sort();
    }


        var commandArray = command.split(' ');

        if (commandArray[0] == 'ADD')
        {
            add(commandArray[1],commandArray[2])
        }

        if (commandArray[0] == 'REMOVE_PHONE')
        {
            return remove(commandArray[1]);
        }

        if (commandArray[0] == 'SHOW')
        {
            return show();
        }

    };

