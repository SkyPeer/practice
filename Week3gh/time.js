/*
var timeObject =

    {
      year: 0,
      mounth: 0,
        day: 2
    };
console.log(new Date(timeObject.year, timeObject.mounth, timeObject.day));
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
    var date = argArray[0].split('-'); var year = date[0]; var mounths = parseInt(date[1])-1;
    var days = date[2];
    var time = argArray[1].split(':'); var hours = parseInt(time[0])+3; var minutes = time [1];

   // console.log(new Date(year, mounth, day,hour, parseInt(min)));

        var dateObj = {

            add: function (arg, typeOfArg) {
                if (typeOfArg == 'months') {mounths = parseInt(mounths) + parseInt(arg)}
                if (typeOfArg == 'days') {days = parseInt(days) + parseInt(arg)}
                if (typeOfArg == 'hours') {hours = parseInt(hours) + parseInt(arg)}
                if (typeOfArg == 'minutes') {minutes = parseInt(minutes) + parseInt(arg)}
                return this;
            },
            subtract: function (arg, typeOfArg) {
                if (typeOfArg == 'months') {mounths = parseInt(mounths) - parseInt(arg)}
                if (typeOfArg == 'days') {days = parseInt(days) - parseInt(arg)}
                if (typeOfArg == 'hours') {hours = parseInt(hours) - parseInt(arg)}
                if (typeOfArg == 'minutes') {minutes = parseInt(minutes) - parseInt(arg)}
                return this;
            },

            getTime: function() {
                this.time = new Date(year, mounths, days, hours, minutes);
                return this.time;
            }
        };

    return dateObj;
}

var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');
console.log(time.getTime());
// "2017-04-20 14:00"