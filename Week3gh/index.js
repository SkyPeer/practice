/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var argArray = date.split(' ');
    var _date = argArray[0].split('-'); var year = _date[0]; var mounths = parseInt(_date[1])-1;
    var days = _date[2];
    var time = argArray[1].split(':'); var hours = parseInt(time[0])+3; var minutes = time [1];

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
};
