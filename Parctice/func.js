let test = { a: {name:'Вася'}/*, toString(){return 'Наташа'}, valueOf(){return this.a}*/}

console.log(test);
test.a.name = 'Петя'
console.log(test)

