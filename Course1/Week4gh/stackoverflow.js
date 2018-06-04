var teams = {
        'dynamo': {
            points: 10,
            goals: 10
        },
        'shakhtar': {
            points: 12,
            goals: 10
        },
        'metalist': {
            points: 7,
            goals: 7
        }
    };


list = ['metalist', 'shakhtar']
console.log(Array.isArray(list))
    /**
     * Проходимся Array#reduce по ключам
     * Если очередной ключ есть в объекте, добавляем его к аккумулятору по ключу
     *
     * @param Object db   Объект, из которого нужно выбрать значения по ключам
     * @param Array  keys Ключи для выборки
     *
     * @return Object Объект, содержащий только указанные ключи
     */
  var filter = (db, keys) => keys.reduce((a, key) => (a[key] = db[key], a), {});

console.info(filter(teams, list));
