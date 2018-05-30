module.exports = {

    eventers: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
       // console.log('event =', event == '');
        this.eventers.push({event: event, subscriber:subscriber, handler:handler});

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function f(event, subscriber) {

        var eventersFilteredArray = [];

        // clear event check
        for (var i = 0; i < this.eventers.length; i++) {
            var a = Object.keys(subscriber);
            var b = Object.keys(this.eventers[i].subscriber);

            if (a[0] == b[0] && this.eventers[i].event != '')
            {
                eventersFilteredArray.push(this.eventers[i])
            }
            else
            {
           //    console.log('filtered', this.eventers[i])
            }
        }
        this.eventers = eventersFilteredArray.slice();


        function eventCheck(event, array) {
            for (var i = 0; i < array.length; i++) {

                if (array[i].event == event) {return true;}
                else{return false;}
            }
        }

        for (var i = 0; i < this.eventers.length; i++)
        {
            var a = Object.keys(subscriber);
            var b = Object.keys(this.eventers[i].subscriber);

            if (eventCheck(this.eventers[i].event, this.eventers) == true && a[0] !== b[0])
            {
                eventersFilteredArray.push(this.eventers[i]);
            }
        }

        this.eventers = eventersFilteredArray.slice();
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (var i = 0; i < this.eventers.length; i++) {
            if (this.eventers[i].event == event)
            {
                this.eventers[i].handler.call(this.eventers[i].subscriber)
            }
        }
       // console.log(this.eventers);
    return this;
    }
};
