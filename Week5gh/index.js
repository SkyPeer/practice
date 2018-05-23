module.exports = {


    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    emitters: [],

    on: function (event, subscriber, handler) {
        /*
        console.log('event ->', event,' *** TYPE:', typeof(event));
        console.log('subscriber ->', subscriber,' *** TYPE:', typeof(subscriber));
        console.log('handler ->', handler,' *** TYPE:', typeof(handler));
        */

        this.emitters.push({event: event, subscriber: subscriber, handler:handler});


        //this.emitters.push({event: event, subscriber: subscriber}); - WORK!!!



      // console.log(this.emitters);
        return this;

    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
    /*    console.log('event:', event)
        console.log('subscriber:',subscriber)*/
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {

    //console.log('EMIT:',this.emitters[0].subscriber.count());
    console.log('EMIT2:',this.emitters[0].subscriber);

       // Object.values(this.emitters[0].subscriber)[1]
       return this;
    }

};
