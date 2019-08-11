// var firstName = 'JohnDefault';
// var lastName = 'SmithDefault';

var user = {
    id : 5,
    age: 33,
    firstName: 'Tom',
    lastName: 'Smith',
    
    getFullName: function () {
        return (this.firstName + ' '+ this.lastName)
    }
};

var user2 = {
    firstName: 'Alex',
    lastName: 'Johns'
};


// console.log('/user.name:', user.getFullName()); //user.name: Tom Smit
// console.log('/user.name:', user.getFullName.apply(user2)); //user.name: Alex Johns
// console.log('----------------------------------------------------------');

function fuu(value, value2, value3, param){
    console.log(this.firstName, ' / ', this.lastName, 'Value:', [value], 'Value2:', value2, 'value3', value3, `this[param] ${param}:`, this[param])
    //console.log(this[param])
}

//fuu.bind(user); //{ firstName: 'Tom', lastName: 'Smit' }

console.log(' - - - - - - - - - - - - - - - - ')
// fuu.call(user, 'test_1', 'test_2', 'test_3', 'age'); //{ firstName: 'Top', lastName: 'Smit' }

console.log(' - - - - - - - - - - - - - - - - ');
// fuu.apply(user, ['test1', 'test2', 'sasdsa', 'age'])

// - - - - - - - - BIND - - - - - 
var getFullname = user.getFullName;
var aaa = getFullname.bind(user)
console.log('aaa', aaa())
// - - - - - - - - - - - - - - - 


function Person(user) {
    this.firstName = user.firstName
    this.lastName = user.lastName
}

Person.prototype = user

var person = new Person(user2)
//console.log('person', person.firstName, 'lastName', person.lastName, 'age', person.age)
console.log('PersonObj:', person, 'PersonAgeProto', person.age)
//console.log('userObj', user)