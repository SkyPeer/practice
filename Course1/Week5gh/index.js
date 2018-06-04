module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */

    eventers: {},

    on: function (event, subscriber, handler) {

        if (this.eventers.hasOwnProperty(event))
        {
            this.eventers[event].push({s: subscriber, h: handler})
        }
        else
        {
            this.eventers[event] = [];
            this.eventers[event].push({s: subscriber, h: handler})
        }

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

        var filteredArray = [];

        if (this.eventers.hasOwnProperty(event)) {

            for (var i = 0; i < this.eventers[event].length; i++)
            {
                if ( (this.eventers[event][i].s === subscriber) == false)
                {
                    filteredArray.push(this.eventers[event][i])
                }
            }

           // this.eventers[event] = filteredArray.slice()

            if (filteredArray.length == 0)
            {
                delete this.eventers[event];
            }
            else
            {
                this.eventers[event] = filteredArray.slice()
            }


        }

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.eventers.hasOwnProperty(event)){
            for (var i = 0; i < this.eventers[event].length; i++)
            {
                this.eventers[event][i].h.call(this.eventers[event][i].s)
            }
        }

      //  console.log(this.eventers);
        return this;
    }
};
