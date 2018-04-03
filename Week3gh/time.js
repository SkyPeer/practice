var timeObject =
    {
      year: 0,
      mounth: 0,
        day: 2
    };
console.log(new Date(timeObject.year, timeObject.mounth, timeObject.day));

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

function sum(a) {
    this.x = a - 10;
return this.x;
}

function add(a) {
    this.x = a + 80;
    return this.x;
}

console.log(sum(25).add(65));
