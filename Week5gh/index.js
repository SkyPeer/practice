module.exports = {

    eventers: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {

        this.eventers.push({event: event, subscriber:subscriber, handler:handler})

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

        var eventersFilteredArray = []

        //console.log(event)
        console.log(' off function object: ',Object.keys(subscriber))


        for (var i = 0; i < this.eventers.length; i++)
        {
            var a = Object.keys(subscriber)
            var b = Object.keys(this.eventers[i].subscriber)
            console.log('a = ',a[0],' b = ',b[0])
            if (a[0] != b[0])
            {
                eventersFilteredArray.push(this.eventers[i]);
            }
        }
        console.log(eventersFilteredArray)
        this.eventers = eventersFilteredArray.slice();

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (var i = 0; i < this.eventers.length; i++)
        {
            if (this.eventers[i].event == event)
            {
                this.eventers[i].handler.call(this.eventers[i].subscriber)
            }
        }
    return this;
    }
};
