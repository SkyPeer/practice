/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
tweetsArray=[];
tweetsArray = tweet.split(' ');
var tweetsFiltered =[];
for (var i=0; i < tweetsArray.length; i++){
	
	if (tweetsArray[i].indexOf('#') !== -1) {
		tweetsFiltered.push(tweetsArray[i].slice(1,tweetsArray[i].length));
	} 
}
return tweetsFiltered;
};
