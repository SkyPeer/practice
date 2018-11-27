const
    fs = require('fs');

let jsonArray = fs.readFileSync("default.json");
/*getJSON(comments, function (json) {
    let array = [];
    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let item = json[key];
            array.push({
                id: item.id,
                balance: item.balance,
                name: item.name,
                email: item.email
            });
        }
    }
});*/
console.log(JSON.parse(jsonArray));


