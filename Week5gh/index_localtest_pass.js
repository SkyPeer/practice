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
      //  console.log('event:', event);
      //  console.log('subscriber:',subscriber);
        filteredArray = [];

       // console.log(this.emitters);

        for (var i = 0; i < this.emitters.length; i++)
        {

          if (this.emitters[i].subscriber.hasOwnProperty('logs') == false)
          {
              filteredArray.push(this.emitters[i]);
          }
        }
        this.emitters = filteredArray.slice();

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {

    //console.log('EMIT:',this.emitters[0].subscriber.count());
    //console.log('EMIT2:',this.emitters[0].subscriber);

        for (var i=0; i<this.emitters.length; i++)
        {
          //  console.log(Object.keys(this.emitters[i]));
        }


       // console.log('after ------------------------------')

        for (var i=0; i<this.emitters.length; i++) {
            if (Object.keys(this.emitters[i].subscriber)[0] == 'counter') {
                this.emitters[i].subscriber.count()
            }
            if (Object.keys(this.emitters[i].subscriber)[0] == 'logs' )
            {
                tempObject = {logs: this.emitters[i].subscriber.logs, func: this.emitters[i].handler};
                tempObject.func()
            }



        }

        //console.log(this.emitters[1]);
        /*
        tempObject = {logs: this.emitters[1].subscriber.logs, func: this.emitters[1].handler};
        console.log(tempObject);
       tempObject.func();
        console.log(tempObject);
        */

        return this;
    }

};
