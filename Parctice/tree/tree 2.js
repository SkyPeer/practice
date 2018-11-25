const fs = require('fs');
let persons = require('./default') || [];

//persons.sort((p1, p2) => p1.parentId - p2.parentId);
//persons.forEach(person => console.log(`id:${person.id} pid:${person.parentId}`));
let personsTree = persons.reduce((acc, person) => {
    if (!person.parentId) {
        acc.push(person)
    }
    else {
        //let parent = acc.find(accPerson => accPerson.id == person.parentId);
        let parent = findRec(acc, person);
        if (!parent)
            console.log('#');

        if (!parent.childs)
            parent.childs = [];
        parent.childs.push(person)
    }
    return acc;

}, []);
function findRec(acc, person) {
    acc.find(accPerson => {
        if (accPerson.childs) {

            let parent = findRec(accPerson.childs, person);

            if (parent)
                return parent;
            else
                return accPerson.id == person.parentId;
        }
    });
}
//console.log(personsTree);


{
    let a = 1;
}
console.log(a);