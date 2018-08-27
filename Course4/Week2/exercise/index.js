
module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */




function Collection() {
    this.collection = [];
    return this;
}

Collection.from = function (array) {

var b =
    {
    collection: array
    }
    Object.setPrototypeOf(b, Collection.prototype)
    return b;

};


// Методы коллекции

Collection.prototype =  {

    append: function (appendArg) {
        this.collection.push(appendArg)
    },

    count: function () {
        return this.collection.length;
    },

    values: function () {
        return this.collection
    },

    constructor: Collection
}

/*
Collection.prototype.values = function () {};
*/
// другие методы


/**
 * Создание коллекции из массива значений
 */
