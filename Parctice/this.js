var firstName: 'Tom'
    var lastName: 'Smit'

var user = {
    id : 5,
    age: 33,
    firstName: 'Tom',
    lastName: 'Smit',
    getFullName: () => {
        return (this.firstName +' '+ this.lastName);
    }
};

var user2 = {
    firstName: 'Alex',
    lastName: 'Johns'
}

console.log('user.name:', user.getFullName()) //user.name: Tom Smit
console.log('user.name:', user.getFullName.apply(user2)) //user.name: Alex Johns
