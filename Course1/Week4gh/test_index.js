/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */



function query(collection) {
    console.log('collection = ',collection);
    var queryObj = query.arguments;


    return collection * query.arguments[1] * query.arguments[2]

}

/**
 * @params {String[]}
 */

function select (argument) {
    console.log('select', select.arguments)
    var funcArg = argument * 1;
    return funcArg;

}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function filterIn(value) {
    console.log('filterIn',filterIn.arguments)
 return  value * 1;
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
