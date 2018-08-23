var animal = {
    eats: true,
    /* meh:{
     pushit:true
     }*/
};

Object.defineProperties(animal, {
    'meh': {
        value: {pushit: true},
        writable: false
    }
})

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

rabbit.eats = false;
rabbit.meh.pushit = false;


console.log(animal.eats)
console.log(animal.meh.pushit)

