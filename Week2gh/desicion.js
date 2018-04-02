var phoneBook = {};

function addContact(name, phones) {

    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = [];
    }
    phoneBook[name] = phoneBook[name].concat(phones);
}

function removeContactPhoneAt(name, index) {

    phoneBook[name].splice(index, 1);

    if (phoneBook[name].length === 0) {
        delete phoneBook[name];
    }
}

function removePhone(phone) {

    var names = Object.keys(phoneBook);

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        var phoneIndex = phoneBook[name].indexOf(phone);

        if (phoneIndex !== -1) {

            removeContactPhoneAt(name, phoneIndex);
            return true;
        }
    }
    return false;
}

function showPhoneBook() {

    var names = Object.keys(phoneBook);
    names.sort();

    return names.map(function (name) {

        var phones = phoneBook[name];

        return name + ': ' + phones.join(', ');
    });
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function phonebook(command) {

    var parts = command.split(' ');

    if (parts[0] === 'ADD') {

        var phones = parts[2].split(',');
        return addContact(parts[1], phones);
    }

    if (parts[0] === 'REMOVE_PHONE') {
        return removePhone(parts[1]);
    }

    if (parts[0] === 'SHOW') {
        return showPhoneBook();
    }
};


phonebook('ADD Ivan 555-10-01,555-10-03');
console.log(phoneBook);

phonebook('ADD Ivan 555-10-02');
console.log(phoneBook);

phonebook('REMOVE_PHONE 555-10-03'),
console.log(phoneBook);

phonebook('ADD Alex 555-20-01');
console.log(phoneBook);

phonebook('REMOVE_PHONE 555-20-01');
console.log(phoneBook);

phonebook('SHOW')