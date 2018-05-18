Function.prototype.myBind = function(_this) {
    console.log(arguments)
    var fn = this;
    var args = [].slice.call(arguments, 1);
    return function() {
        var curArgs = [].slice.call(arguments);
        //console.log(arguments);
        return fn.apply(_this, args.concat(curArgs));
    };
};


function Callback(item) {
    console.log(arguments);
    return this.name + ' has ' + item;
}

var person = {
    name: 'Sergey',
    items: ['keys',
        'phone',
        'banana'
    ],
    showItems: function() {
        let cbBinded = Callback.bind(this);
        this.items.map(cbBinded);



    }
}
person.showItems();


function User () {
    return {
        age: 24,
        showAge: function () {
            console.log(this.age);
        }
    }
}

var ivan = User();
ivan.age=25;
ivan.showAge()
