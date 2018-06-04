function date(funcArg) {
  var argArray = funcArg.split(' ');

  var _date = argArray[0].split('-');
  var year = _date[0];
  var mounths = parseInt(_date[1]) - 1;
  var days = _date[2];

  var _time = argArray[1].split(':');
  var hours = parseInt(_time[0]) + 3;
  var minutes = _time[1];

  var dateObj = {

    add(arg, typeOfArg) {
      if (typeOfArg == 'months') {
        mounths = parseInt(mounths) + parseInt(arg)
      }
      if (typeOfArg == 'days') {
        days = parseInt(days) + parseInt(arg)
      }
      if (typeOfArg == 'hours') {
        hours = parseInt(hours) + parseInt(arg)
      }
      if (typeOfArg == 'minutes') {
        minutes = parseInt(minutes) + parseInt(arg)
      }
      return this;
    },
    subtract(arg, typeOfArg) {
      if (typeOfArg == 'months') {
        mounths = parseInt(mounths) - parseInt(arg)
      }
      if (typeOfArg == 'days') {
        days = parseInt(days) - parseInt(arg)
      }
      if (typeOfArg == 'hours') {
        hours = parseInt(hours) - parseInt(arg)
      }
      if (typeOfArg == 'minutes') {
        minutes = parseInt(minutes) - parseInt(arg)
      }
      return this;
    },
    get value() {
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
console.log(time.value);
// "2017-04-20 14:00"