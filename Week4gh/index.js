/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

    var argumentsObj = query.arguments;
    // console.log(argumentsObj)
    var selectParams = [];
    var filterProp = '';
    var filterKeys = [];

    for (var i = 1; i < argumentsObj.length; i++) {
        if (argumentsObj[i].hasOwnProperty('select')) {
            selectParams = argumentsObj[i].select;
        }
        if (argumentsObj[i].hasOwnProperty('property')) {
            filterProp = argumentsObj[i].property;
            filterKeys = argumentsObj[i].values;
        }


    }

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

    var filteredCollection = filter(filterProp,filterKeys,collection);

    function selectfunc(db, keys) {

        var selectedCollection = [];

        for (var i = 0; i < db.length; i++)
        {
            selectedCollection.push(objectFilter(db[i], keys));
        }

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


    var queryCollection = selectfunc(filteredCollection,selectParams)

    return queryCollection;
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
  //  console.log('paramsArray', paramsArray) // paramsArray - МАССИВ!
    return {select: paramsArray};
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

    return {property: property, values: values}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
