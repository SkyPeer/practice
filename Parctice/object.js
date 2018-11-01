var obj={}

console.log(obj)

let name = 'nameKey'
obj[name] = 23 // add to Obj
console.log(obj)

let lastname = 'lastNameKey'
obj[lastname] = 30
console.log(obj)
console.log(Object.keys(obj))

del(lastname);

function del(arg) {
    delete obj[arg]
}

console.log(obj)