/*
var timeObject =

    {
      year: 0,
      mounth: 0,
        day: 2
    };
console.log(new Date(timeObject.year, timeObject.mounth, timeObject.day));
*/


/*function time(time) {

} */
/*
var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');

console.log(time.value);
*/

/*
function createObject() {
    return {
        first: function () {
            return this;
        },
        second: function () {
            return this;
        }
    }
}
*/


function sum(num) {

    return {
        add: function add(num2){
        var itog = num + num2;
        return itog;
    }
}

}

var s = sum(50).add(25);

console.log(s);

/*
var time = date('2017-05-16 13:45').add(24, 'hours').add(3, 'days').add(15, 'minutes');
/*
console.log(time);
    */