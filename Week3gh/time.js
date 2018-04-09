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

function date(funcArg) {
    var argArray = funcArg.split(' ');
    var date = argArray[0].split('-'); var year = date[0]; var mounth = parseInt(date[1])-1; var day = date[2];
    var time = argArray[1].split(':'); var hour = parseInt(time[0])+3; var min = time [1];

    console.log('date:', year, mounth, day, 'time:',hour, min);

    var dateObj = {

    }

}


var time = date('2017-05-16 13:45');
/*.add(24, 'hours').add(3, 'days').add(15, 'minutes')  */
