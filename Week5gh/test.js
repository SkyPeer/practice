var event = new Event('build');

// Подписываемся на событие
elem.addEventListener('build', function (e) {console.log(arguments)}, false);

// Вызываем событие
elem.dispatchEvent(event);