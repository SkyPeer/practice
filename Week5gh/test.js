/*var event = new Event('build');

// Подписываемся на событие
elem.addEventListener('build', function (e) {console.log(arguments)}, false);

// Вызываем событие
elem.dispatchEvent(event);*/

/* links
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/s0O_l9j4Eeex6A7lu81O-A
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/Rh2_i84REeeNVg6qyL-FoA
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/s0O_l9j4Eeex6A7lu81O-A
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/Ig4syPkwEeeeuwphjbgk3A
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/bZOCVg23Eeic0RJNIFxTVg
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/IGbIFxYOEeiyhRJKMBBEfA
https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/G9LmJD-lEeiosQpV5z7REg
 https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/XWZNfSiPEeiJhgo-yJHGig
 https://www.coursera.org/learn/javascript-osnovy-i-funktsii/discussions/weeks/5/threads/ZLXAYESCEeiX7hInaGQfCA
 */

var eventers = {};
//var eventersArray = [];

function add(event, subscriber, handler) {


    if (eventers.hasOwnProperty(event) == true) {
        eventers[event].push({s: subscriber, h: handler})
    }
    else {
        eventers[event] = [];
        eventers[event].push({s: subscriber, h: handler})
    }


}


add(123,254,154)
add(123,111,222)
add(1231,1444,222)
console.log(eventers[123], Array.isArray(eventers[123]))
//console.log(a)
//var b = addnew(123,255,255)
//console.log(b[0][123][0].s)


