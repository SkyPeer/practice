/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

console.log('tweets = ', tweet);
console.log('tweets.length =', tweet.length);
console.log(Array.isArray(tweet));


var splitArg = ' ';

tweetsArray=[];
tweetsArray = tweet.split(splitArg);
console.log(tweetsArray);
console.log('tweetsArray.length =', tweetsArray.length);
console.log('Array check =', Array.isArray(tweetsArray));

/*фильтрация массива*/

var tweetsFiltered =[];
for (var i=0; i < tweetsArray.length; i++){
	
	if (tweetsArray[i].indexOf('#') !== -1) {
		tweetsFiltered.push(tweetsArray[i].slice(1,tweetsArray[i].length));
	} 
}

console.log(tweetsFiltered);
return tweetsFiltered;
};
