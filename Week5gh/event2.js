var PubSub =
{
    handlers: {},

    subscribe: function (event, handler) {
      //  console.log('| HANDLER IN:',handler,'  |');
      //  console.log(' * ARG: this.subscribe', arguments);
        if (this.handlers[event] === undefined)
        {
            this.handlers[event] = []; this.handlers[event].push(handler)
        }
       // console.log('*** LOG: || hadlers:', handlers, 'arraycheck:',Array.isArray(handlers[event]), ' ||',console.log())
        return this;
    },

    publish: function (event) {
      //  console.log(' * ARG: this.publish', arguments);
        if (this.handlers[event] === undefined) return;
        var i = 0, len = this.handlers[event].length;

        for (i; i < len; i++)
        {
            this.handlers[event][i](arguments[i+1]);
        }
        return this;
    },

    unsubscrbe: function (event) {
        delete this.handlers[event];
        return this;
    }

};

pubSub = PubSub;

var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};



var logger = {
    logs: []
};



pubSub.subscribe('myEvent', function Arg(arg){ console.log("myEvent worked. Arg: " + arg) } );
pubSub.publish('myEvent', 'it myArg');

pubSub.subscribe('myNewEvent',
    function Arg2(arg2)
    {
    console.log('myNewEvent worked. Arg: ' + arg2 + ' plus new argumt');
    });

pubSub.publish('myNewEvent', 'and... it myNEwArg');
pubSub.publish('myNewEvent', 'and... it myNEwArg again');

pubSub.unsubscrbe('myNewEvent');
pubSub.publish('myNewEvent', 'and... it myNEwArg');


