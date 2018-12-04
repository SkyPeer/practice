const
    fs = require('fs'),
    defaultArray = require('./default');



function getRandom(min, max)
{
    return parseInt(Math.random() * (max - min) + min);
}

const languages = ['ALGOL', 'LISP', 'COBOL', 'C++', 'C#', 'PYTHON', 'JAVA', 'JAVASCRIPT', 'RUBY', 'QBASIC', 'ASSAMBLER', 'PASCAL'];


let bigData = [];

for ( let i=0; i<5253; i++ ){

    let person = defaultArray[getRandom(0, defaultArray.length)];

    bigData.push({
            id: i+1,
            age: getRandom(20, 35),
            language: languages[getRandom(0, languages.length)],
            name: person.name,
            email: person.email,
            balance: person.balance,
    })
}

let data = JSON.stringify(bigData, null, 2);
fs.writeFileSync('bigData.json', data);

let jsonArray = require("./bigData.json");
console.log(jsonArray.length);