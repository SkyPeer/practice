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

// FUNCTION SELECT !!!!

function selectParamsFunc() {
    var paramsObject = selectParamsFunc.arguments;
    var paramsArray = [];

    for (var i = 0; i < paramsObject.length; i++) {
        paramsArray.push(paramsObject[i]);
    }
    console.log('paramsArray', paramsArray) // paramsArray - МАССИВ!
return paramsArray;
}

function filterfunc (db, keys) {

    var friendsFilteredArray = [];

    filter = (db, keys) => keys.reduce((a, key) => (a[key] = db[key], a), {}); // ????? //

    for (var i = 0; i < friends.length; i++) {
        friendsFilteredArray.push(filter(db[i], keys))
    }
return(friendsFilteredArray);
}

var selectParams = selectParamsFunc('name', 'gender', 'email');
console.log(filterfunc(friends, selectParams));


// FUNCTION FILTER
function filter(key, params) {
    var key = key; // string
    var params = params; // array
    var filteredArray = [];

    function paramsCheck(key, params, num) {
        var key = key; // string
        var params = params; // array
        var num = num;
            for (var i = 0; i < params.length; i++){
                if (friends[num][key] == params[i]) {return true;}
            }
    }

    for (var i=0; i < friends.length; i++){
        if (friends[i].hasOwnProperty(key) == true && paramsCheck(key, params, i) == true){
            filteredArray.push(friends[i]);
        }
    }

    return filteredArray;
}
/*
var key = 'name';
var param = 'Эмили';
test = friends[1];
console.log(test[key] === param);
*/

console.log(filter('favoriteFruit', ['Яблоко', 'Картофель']));

/*
if (friends[1].hasOwnProperty('favoriteFruit') == true){
    var a = true;
}
else
{
    var a = false;
}
console.log(a);
    */