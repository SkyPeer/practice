module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.collection = [];
}

Collection.prototype.values = function () {
    return this.collection;
};

Collection.prototype.at = function(atArg) {

    if (atArg > this.collection.length || atArg <= 0 )
        {return null;}

    else

        {return this.collection[--atArg];}
};

Collection.prototype.removeAt = function (removeAtArg) {

    if (removeAtArg > this.collection.length || removeAtArg <= 0)
    {
        return false;
    }

    else{
        removeAtArg = removeAtArg - 1;
        function collectionFilter(item, index) {return index != removeAtArg}

            var filteredCollectionArray = this.collection.filter(collectionFilter);

            this.collection = filteredCollectionArray;

        return true;
    }
};

Collection.prototype.count = function () {
    return this.collection.length;
};

Collection.prototype.append = function (newCollection) {



    if (newCollection instanceof  Collection)
    {
        for (var i=0; i<newCollection.collection.length; i++)
        {
            this.collection.push(newCollection.collection[i])
        }
    }
    else {
        this.collection.push(newCollection);
    }
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arg) {
    this.collection = arg;
    Object.setPrototypeOf(this, Collection.prototype);
    return this;
};

