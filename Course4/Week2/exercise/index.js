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
    /*    function collectionFilter(item, index) {return index != removeAtArg}

            var filteredCollectionArray = this.collection.filter(collectionFilter);

            this.collection = filteredCollectionArray;
       */
        this.collection.splice(removeAtArg, 1);
        return true;
    }
};

Collection.prototype.count = function () {
    return this.collection.length;
};

Collection.prototype.append = function (newCollection) {


    if (newCollection instanceof Collection) {
        //  console.log('instance');
        /*
            for (var i=0; i<newCollection.collection.length; i++)
            {
                this.collection.push(newCollection.collection[i])
            }
        } */

        this.collection = this.collection.concat(newCollection.collection);
        /*console.log(this.collection) */
    }

    else {
      //  console.log('else');
        this.collection.push(newCollection);
    }
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arg) {
    var collectionArray = new Collection;
    collectionArray.collection = arg;
    return collectionArray;
};