/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (funcArg) {

    var argArray = funcArg.split(' ');

    var _date = argArray[0].split('-'); var years = _date[0]; var mounths = parseInt(_date[1])-1; var days = _date[2];

    var _time = argArray[1].split(':'); var hours = parseInt(_time[0]); var minutes = _time [1];

    var dateObj = {

        add: function (arg, typeOfArg) {
            if (arg < 0 || typeOfArg != 'years' && typeOfArg != 'months' && typeOfArg != 'days' && typeOfArg != 'hours' && typeOfArg != 'minutes') {
                throw new TypeError;
            }
            else {
                if (typeOfArg == 'years') {years = parseInt(years) + parseInt(arg)}
                if (typeOfArg == 'months') {mounths = parseInt(mounths) + parseInt(arg)}
                if (typeOfArg == 'days') {days = parseInt(days) + parseInt(arg)}
                if (typeOfArg == 'hours') {hours = parseInt(hours) + parseInt(arg)}
                if (typeOfArg == 'minutes') {minutes = parseInt(minutes) + parseInt(arg)}
            }
            return this;

        },
        subtract: function (arg, typeOfArg) {
            if (arg < 0 || typeOfArg != 'years' && typeOfArg != 'months' && typeOfArg != 'days' && typeOfArg != 'hours' && typeOfArg != 'minutes') {
                throw new TypeError;
            }
            else{
                if (typeOfArg == 'years') {years = parseInt(years) - parseInt(arg)}
                if (typeOfArg == 'months') {mounths = parseInt(mounths) - parseInt(arg)}
                if (typeOfArg == 'days') {days = parseInt(days) - parseInt(arg)}
                if (typeOfArg == 'hours') {hours = parseInt(hours) - parseInt(arg)}
                if (typeOfArg == 'minutes') {minutes = parseInt(minutes) - parseInt(arg)}
            }
            return this;
        }
    };

    Object.defineProperty(dateObj, 'value',
        {
            get: function () {

                Number.prototype.padLeft = function(base,chr){
                    var  len = (String(base || 10).length - String(this).length)+1;
                    return len > 0? new Array(len).join(chr || '0')+ this : this;}

                this.time = new Date(years, mounths, days, hours, minutes);

                this.timeFormat = [this.time.getFullYear(), (this.time.getMonth()+1).padLeft(), this.time.getDate().padLeft()].join('-') +' ' +
                    [this.time.getHours().padLeft(), this.time.getMinutes().padLeft()].join(':');

                return this.timeFormat;
            }
        });

    return dateObj;
};
