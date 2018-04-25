/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var array = ['a:0', 'b:2'];

function query(collection) {
//collectionArray = collection;
console.log('query func');
//console.log(typeof(collection))
console.log(typeof(collection));
console.log(Array.isArray(array));
}

/**
 * @params {String[]}
 */
function select() {
console.log('select func')
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
console.log('filter ok');
}

function add() {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
