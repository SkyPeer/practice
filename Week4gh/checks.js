// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
/*
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

console.info('OK!');
*/

var friendsArray = [];
var selectParams = selectParamsFunc('name', 'gender', 'email')

function selectParamsFunc() {
    var paramsObject = selectParamsFunc.arguments;
    var paramsArray = [];
    //console.log(paramsObject);
    //console.log(selectParamsFunc.arguments.length)

    for (var i = 0; i < paramsObject.length; i++) {
        paramsArray.push(paramsObject[i]);
    }
    //console.log('paramsArray', paramsArray)

    //console.log(Object.keys(friends[1]))

    var source = friends[1];

    var newobject = {};

    Object.defineProperties(newobject, {
        'name': {value: 'Vasya'},
        'age': {value: '15'}
    });

    console.log('newobject:', newobject.name);
}
// скопируем в него все свойства user
   // console.log(friends);

https://www.google.ru/search?q=delete+object+keys+javascript&oq=delete+object+ket&aqs=chrome.2.69i57j0l5.7611j0j7&sourceid=chrome&ie=UTF-8



/*
    for (var i = 0; i < friends.length; i++)
    {
        friendsArray.push(friends[i].keys(paramsObject))
    }

}
*/



//console.log('friendsArray', friendsArray);