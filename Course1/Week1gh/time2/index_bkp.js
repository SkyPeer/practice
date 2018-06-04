/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {


if (interval > 59)
{
	a = Math.floor(interval / 60); 
	hours = hours + a;
	minutes = minutes + (interval - (a * 60));	

}
else 
{
	minutes = minutes + interval;
}


if (minutes > 59){ hours = hours +1; minutes = minutes - 60 }
if (hours > 23){hours = hours - 24 }

if (hours >=0 && hours <10) {hours = '0' + hours};
if (minutes >=0 && minutes < 10) {minutes = '0' + minutes};

var time = (hours + ':' + minutes);

console.log(time);
	
return time;
};
