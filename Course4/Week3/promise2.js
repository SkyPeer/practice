'use strict';

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 function answefunc(a) {
     let promise = new Promise((result, error) => {
         let b = a * 3.25;
         console.log(b);
     });
     promise
         .then(
             result => {
                 // первая функция-обработчик - запустится при вызове resolve
                 console.log("Fulfilled: " + result); // result - аргумент resolve
             },
             error => {
                 // вторая функция - запустится при вызове reject
                 console.log("Rejected: " + error); // error - аргумент reject
             }
         );
     console.log(promise);
     return promise;

 }

    rl.question("What do you think of io.js? ", function (answer) {
        answefunc(answer);

        rl.close();
    });

