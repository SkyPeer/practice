var pust = {
    name: 'vasya',
    tell: function () {
        console.log('vasya govorit: ', this.name)
        var b = function () {
            console.log(1)
        };
        new b();
        return this;
    },
    go: function () {
        console.log('vasya poshel')
        return this;
    },
    foo: function () {
        return this;
    }
};

function test() {
    this.name = 1;
    this.foo += 1;
}

var tt = {
    name:0,
    foo:5
};
var bb = {
    name:'vas',
    foo:'pet'
};
var ttt = Object.create(null)
test.call(tt);
test.call(bb);

var p = pust.tell();
var pp = p.go();
var ppp = pp.foo();

pust.tell().go().foo();
console.log(1);