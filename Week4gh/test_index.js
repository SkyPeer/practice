/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */



function query(collection) {
    console.log('collection = ',collection);
    var queryObj = query.arguments;
    console.log('query.arguments = ', queryObj[2]['fil'])
    return collection * query.arguments[1] * query.arguments[2]

}

/**
 * @params {String[]}
 */

function select (argument) {
    console.log('select', select.arguments)
    var funcArg = argument * 2;
    return funcArg;

}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function filterIn(value) {
    console.log('filterIn',filterIn.arguments)
 return {fil: value * 2};
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
