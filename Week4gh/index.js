/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var data = [];
var selectCount = 0;
var filterCount = 0;
function query(collection) {

    //console.log('selectCount',selectCount,' , filterCount',filterCount);
   // console.log(query.arguments);

    if (query.arguments.length == 1)
    {
        data = collection.slice();
        return data;
    }
    else
    {
        var functionArray = [];
        data = collection.slice();

        for (var i=1; i<arguments.length; i++)
        {
            if (query.arguments[i].name=='filterIn') {var priority = 'a'}
            if (query.arguments[i].name=='select') {var priority = 'b'}
            functionArray.push({priority: priority, func: query.arguments[i]})

            //data = query.arguments[i](data);
        }

        var functionArraySorted = functionArray.slice().sort(function (a, b) {
            if (a.priority > b.priority) {return 1;}
            if (a.priority < b.priority) {return -1;}
            return 0;
        });
        for (var i=0; i < functionArraySorted.length; i++)
        {
            data = functionArraySorted[i].func(data);
        }

        return data;
    }

}


/**
 * @params {String[]}
 */
function select() {
    selectCount++;
    var paramsObject = select.arguments;
    var paramsArray = [];


    for (var i = 0; i < paramsObject.length; i++) {
        paramsArray.push(paramsObject[i]);
    }

    //console.log(' *****  SELECT FUNC:', '1) ParamsArray:',paramsArray, '2) Arguments:',select.arguments);

    return function select(collection) {
        var selectedCollection = [];



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
    filterCount++;
    var key = property; // string
    var params = values; // array
    var filteredArray = [];

    //console.log(' *****  FILTER FUNC:', '1) Params:',key,' , ', params, '2) Arguments:',filterIn.arguments);

    return function filterIn(collection) {

        function paramsCheck(key, params, num) {
            var num = num;
            for (var i = 0; i < params.length; i++) {
                if (collection[num][key] == params[i]) {
                    return true;
                }
            }
        }

        for (var i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(key) == true && paramsCheck(key, params, i) == true) {
                filteredArray.push(collection[i]);
            }
        }

        return filteredArray;
    }

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
