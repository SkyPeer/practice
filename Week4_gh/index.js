/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
var collectionArray = [];
var filtercollectionArray = [];

function query(collection) {
collectionArray = collection;
//console.log(collectionArray);
    return this;
}

/**
 * @params {String[]}
 */
function select() {
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {


}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
