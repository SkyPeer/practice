var assert = require('assert');

var Collection = require('./index');

// Создаем коллекцию чисел

var numbers = new Collection();
/*console.log(numbers); */
numbers.append(10);
numbers.append(20);

assert.equal(numbers.count(), 2);
assert.deepEqual(numbers.values(), [10, 20]);
/*console.log('1st test ok');
console.log(numbers instanceof Collection); */


// оздаем коллекцию букв

var letters = Collection.from(['a', 'b', 'c']);
/*console.log(letters); */

letters.append('d');
/*console.log(letters.values()); */
assert.equal(letters.count(), 4);

assert.deepEqual(letters.values(), ['a', 'b', 'c', 'd']);
/*console.log(letters instanceof Collection); */


// Смешиваем обе коллекции
var items = new Collection();
/*console.log('*numbers*: ', numbers);
console.log('*letters*: ', letters); */
items.append(numbers);
items.append(letters);
/*console.log(items.values()); */

assert.equal(items.count(), 6);
assert.deepEqual(items.values(), [10, 20, 'a', 'b', 'c', 'd']);



// Проверяем получение элемента
assert.equal(items.at(0), null);
assert.equal(items.at(1), 10);
assert.equal(items.at(3), 'a');
assert.equal(items.at(6), 'd');

// Проверяем удаление
assert.equal(items.removeAt(0), false);
assert.equal(items.removeAt(2), true);
assert.equal(items.removeAt(5), true);

assert.deepEqual(items.values(), [10, 'a', 'b', 'c']);

console.info('OK!');
