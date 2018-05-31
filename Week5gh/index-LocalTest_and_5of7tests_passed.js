module.exports = {

    eventers: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */

    eventCheck: function (array, event) {

        for (var i = 0; i < array.length; i++)
        {
               if (array[i].event == event)
               {
                   return true;
                }
                else
                {
                    return false;
                }
        }
        return this;
    },

    on: function (event, subscriber, handler) {

        this.eventers.push({event: event, subscriber:subscriber, handler:handler, status: true});

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        //console.log('try!!! off function.event = ',event);
        if (this.eventCheck(this.eventers, event) == true)
        {
            //console.log('off function.event = ',event);
            var eventersFilteredArray = [];
            var eventersArrayWhithoutClearEvents = [];

            // clear event check
            /*
            for (var i = 0; i < this.eventers.length; i++) {

                if (this.eventers[i].subscriber === subscriber && this.eventers[i].event != '')
                {
                    eventersArrayWhithoutClearEvents.push(this.eventers[i])
                }

                if (this.eventers[i].subscriber === subscriber == false && this.eventers[i].event != '')
                {
                    eventersArrayWhithoutClearEvents.push(this.eventers[i])
                }

            }
            */

            eventersArrayWhithoutClearEvents = this.eventers.slice();

            for (var i = 0; i < eventersArrayWhithoutClearEvents.length; i++)
            {

                if (this.eventCheck(this.eventers, eventersArrayWhithoutClearEvents[i].event) == true && subscriber === eventersArrayWhithoutClearEvents[i].subscriber == false)
                {
                    eventersFilteredArray.push(this.eventers[i]);
                }
            }
            this.eventers = eventersFilteredArray.slice();

        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {

        if (this.eventCheck(this.eventers, event) == true)
        {
            for (var i = 0; i < this.eventers.length; i++) {
                if (this.eventers[i].event == event)
                {
                    this.eventers[i].handler.call(this.eventers[i].subscriber)
                }
            }
           // console.log('emit function log (this.eventers.length) =', this.eventers.length);

        }
        return this;
    }
};
