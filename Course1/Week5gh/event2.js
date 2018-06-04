var PubSub =
{
    emitters: [],

    eventer : {},

    on: function (event, subscriber, handler) {
      //  console.log('| HANDLER IN:',handler,'  |');
      //  console.log(' * ARG: this.subscribe', arguments);
       // if (this.handlers[event] === undefined)
     //   {
        //event ={}
        //event[subscriber] = handler;
        this.eventer = {event: event, subscriber: subscriber, handler: handler}
        //console.log('Object.keys(eventer) =', Object.keys(this.eventer));

       // console.log(event)
     //   }
       //console.log('*** LOG: || hadlers:', handlers, 'arraycheck:',Array.isArray(handlers[event]), ' ||',console.log())

        //console.log(this.emitters, this.emitters.length);
        return this;
    },

    off: function (event) {
        delete this.emitters[event];
        return this;
    },


    emit: function (event) {
    //  console.log(' * ARG: this.publish', arguments, '  event: ', event);
        //if (this.handlers[event] === undefined) return;
       // console.log(this.eventer.handler)
        this.eventer.handler.call(this.eventer.subscriber);

       /* for (var i = 0; i < this.emitters.length; i++)
        {
        // this.emitters[event][i](arguments[i+1]);
        } */
        return this;
    }

};

emitter = PubSub;

var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};




var logger = {
    logs: []
};



emitter
//    .on('myEvent', function Arg(arg){ console.log("myEvent Работает + аргумент:" + arg) } )
    .on('new_notification', notifications, notifications.count)
    .emit('new_notification')
    .on('new_notification', logger, function () {this.logs.push('Произошло новое событие new_notification');})
   .emit('new_notification');


console.log('notifications.counter', notifications.counter);
console.log('logger.logs',logger.logs)
/*
pubSub.subscribe('myNewEvent',
    function Arg2(arg2)
    {
    console.log('myNewEvent worked. Arg: ' + arg2 + ' plus new argumt');
    });

pubSub.publish('myNewEvent', 'and... it myNEwArg');
pubSub.publish('myNewEvent', 'and... it myNEwArg again');

pubSub.unsubscrbe('myNewEvent');
pubSub.publish('myNewEvent', 'and... it myNEwArg');
*/


/*

 on: function (event, subscriber, handler)
 off: function (event, subscriber) {
 emit: function (event) {



emitter
    .on('new_notification', notifications, notifications.count)
    .on('new_notification', logger, function () {
        this.logs.push('Произошло новое событие new_notification');
    })
    .on('new_notification', logger, function () {
        // this указывает на logger
        this.logs.push('Добавлена новая нотификация. Количество - ' + notifications.counter);
    })
    .emit('new_notification');

// Проверяем количество нотификаций
assert.equal(notifications.counter, 1, 'Получена одна нотификация');

// В логе сохранено событие
// Так как обработчик notifications.count отработал первым,
//  в логах сохранено правильное количество нотификаций
assert.deepEqual(logger.logs, [
    'Произошло новое событие new_notification',
    'Добавлена новая нотификация. Количество - 1'
]);

// На время отключаем логгирование, а затем снова включаем
emitter
    .off('new_notification', logger)
    .emit('new_notification')


    .on('new_notification', logger, function () {
        this.logs.push('Новое событие new_notification!');
    })
    .emit('new_notification');

// Проверяем количество нотификаций
assert.equal(notifications.counter, 3, 'Получено три нотификации');
// Проверяем, что логи были отключены, а затем снова подключены
assert.deepEqual(logger.logs, [
    'Произошло новое событие new_notification',
    'Добавлена новая нотификация. Количество - 1',
    'Новое событие new_notification!'
]);

console.info('OK!');

*/