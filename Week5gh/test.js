var event = new Event('build');

// Подписываемся на событие
elem.addEventListener('build', function (e) {console.log(arguments)}, false);

// Вызываем событие
elem.dispatchEvent(event);

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