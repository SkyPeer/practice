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

      //  console.log(' * ARG: this.subscribe', arguments);

        if (handlers[event] === undefined)
        {
            handlers[event] = []; handlers[event].push(handler)
        }
        console.log('hadlers:', handlers)

    };

    this.publish = function (event) {
      //  console.log(' * ARG: this.publish', arguments);

        if (handlers[event] === undefined) return;

        var i = 0, len = handlers[event].length;

        for (i; i < len; i++)
        {
            handlers[event][i](arguments[i+1]);
        }
    };

};

pubSub = new PubSub();

pubSub.subscribe('myEvent', function(arg){
    console.log("myEvent worked. Arg: " + arg);
});
pubSub.publish('myEvent', 'it myArg');

pubSub.subscribe('myNewEvent', function(arg2){
    console.log('myNewEvent worked. Arg: ' + arg2 + ' plus new argumt');
});
pubSub.publish('myNewEvent', 'and... it myNEwArg');
pubSub.publish('myNewEvent', 'and... it myNEwArg again');