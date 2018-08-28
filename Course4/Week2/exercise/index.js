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

    var b = {collection: array}

    Object.setPrototypeOf(b, Collection.prototype)

    return b;
};

// Методы коллекции
Collection.prototype =  {

    testName: "ahhhGGGGGGG",

    append: function (appendArg) {

        /*console.log('ArrayisArray*appendArg*: ', Array.isArray(appendArg.collection));
        console.log('*appendArg*: ', appendArg.collection); */

        if (Array.isArray(appendArg.collection) == true){
            this.collection.concat(appendArg)
        }
        else {
            this.collection.push(appendArg)
        }

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
