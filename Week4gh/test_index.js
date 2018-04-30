/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var aValue = 0;

function query(collection) {
    console.log('aValue', aValue);
    console.log('collection = ',collection);
    console.log('query.arguments = ', query.arguments)
   // console.log('query = ', a);
    return collection * query.arguments[1] * query.arguments[2]

}

/**
 * @params {String[]}
 */

function select (argument) {
    console.log(select.arguments)
    var funcArg = argument * 2;
    aValue = aValue + funcArg;
    return funcArg;

}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function filterIn(value) {
    console.log(filterIn.arguments)
    var funcArg = value * 2;
    aValue = aValue + funcArg;
 return funcArg;
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
