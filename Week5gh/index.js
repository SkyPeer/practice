module.exports = {

    eventers: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {

        this.eventers.push({event: event, subscriber:subscriber, handler:handler});

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function f(event, subscriber) {

        var eventersFilteredArray = [];
        //var ii = this.eventers.length;
        //console.log(event)
    //    console.log(' off function object: ',Object.keys(subscriber))
    //    console.log(' off function object: ',Object.keys(subscriber))

        function clearEventCheck(array, subscriber) {

            console.log(clearEventCheck.arguments);

            for (var i = 0; i < array.length; i++) {
                var a = Object.keys(subscriber);
                var b = Object.keys(array[i].subscriber);

                if (array[i].event == '', a[0] == b[0])
                {
                    return true;
                }
            }
        }


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
         //   console.log('a = ',a[0],' b = ',b[0])

            //console.log(eventCheck(this.eventers[i].event, this.eventers))

            if (eventCheck(this.eventers[i].event, this.eventers) == true && a[0] !== b[0] && clearEventCheck(this.eventers, subscriber) == false)
            {
                eventersFilteredArray.push(this.eventers[i]);
            }
        }
        console.log(eventersFilteredArray);
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
