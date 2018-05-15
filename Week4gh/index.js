/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */



function query(collection) {

//console.log(query.arguments[1]);


    if (query.arguments.length == 1)
    {
        return collection;
    }
    else
    {
        return query.arguments[1](collection);
    }

}


/**
 * @params {String[]}
 */
function select() {

    var paramsObject = select.arguments;
    var paramsArray = [];


    for (var i = 0; i < paramsObject.length; i++) {
        paramsArray.push(paramsObject[i]);
    }

    console.log(' *****  SELECT FUNC:', '1) ParamsArray:',paramsArray,'Arguments:',select.arguments);

    return function select(collection) {
        var selectedCollection = [];
        console.log('*** SELEC FUN RETURN *** !!! :)E');


        for (var i = 0; i < collection.length; i++)
        {
            selectedCollection.push(objectFilter(collection[i], paramsArray));
        }

        // проверка каждого объекта по ключам
        function objectFilter(obj, filterBy) {
            var filtered = {};

            for(var key in obj) {
                filterBy.forEach(function(filterItem) {
                    if (key == filterItem) filtered[key] = obj[key];
                });
            }
            return filtered;
        }

    return selectedCollection;
    }

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

    function filter(key, params, newcollection) {


        var key = key; // string
        var params = params; // array
        var filteredArray = [];

        function paramsCheck(key, params, num) {
            var key = key; // string
            var params = params; // array
            var num = num;
            for (var i = 0; i < params.length; i++) {
                if (collection[num][key] == params[i]) {
                    return true;
                }
            }
        }

        for (var i = 0; i < collection.length; i++) {
            if (newcollection[i].hasOwnProperty(key) == true && paramsCheck(key, params, i) == true) {
                filteredArray.push(collection[i]);
            }
        }

        return filteredArray;
    }



    return {property: property, values: values}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
