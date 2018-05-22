/*var Emitter = require("events");
var emitter = new Emitter();
var eventName = "greet";
emitter.on(eventName, function(){
    console.log("Hello all!");
});

emitter.on(eventName, function(){
    console.log("Привет!");
});

emitter.emit(eventName);
*/

var PubSub = function ()
{

    var handlers = {};

    this.subscribe = function (event, handler) {

      //  console.log('| HANDLER IN:',handler,'  |');


      //  console.log(' * ARG: this.subscribe', arguments);

        if (handlers[event] === undefined)
        {
            handlers[event] = []; handlers[event].push(handler)
        }
       // console.log('*** LOG: || hadlers:', handlers, 'arraycheck:',Array.isArray(handlers[event]), ' ||',console.log())



    };

    this.publish = function (event) {
      //  console.log(' * ARG: this.publish', arguments);



        if (handlers[event] === undefined) return;

        var i = 0, len = handlers[event].length;

        console.log(len);

        for (i; i < len; i++)
        {
            console.log('arguments[i]  :  ',arguments[i]);
            console.log('arguments[i+1]  :  ',arguments[i+1]);
            handlers[event][i](arguments[i+1]);
        }
    };

    this.unsubscrbe = function (event) {

        console.log(handlers)
        console.log('delete result:', delete handlers[event])
        console.log(handlers)

    }

};

pubSub = new PubSub();

pubSub.subscribe(
    'myEvent',
    function Arg(arg){ console.log("myEvent worked. Arg: " + arg) }
    );
pubSub.publish('myEvent', 'it myArg');

pubSub.subscribe('myNewEvent',
    function Arg2(arg2)
    {
    console.log('myNewEvent worked. Arg: ' + arg2 + ' plus new argumt');
    });

pubSub.publish('myNewEvent', 'and... it myNEwArg');
pubSub.publish('myNewEvent', 'and... it myNEwArg again');

pubSub.unsubscrbe('myNewEvent3');
pubSub.publish('myNewEvent', 'and... it myNEwArg');