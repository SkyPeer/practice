

var tweets = 'Прохожу курс на #coursera по #javascript';


/* var b = 'кот и собака'; */
console.log('tweets = ', tweets);
console.log('tweets.length =', tweets.length);
console.log('Array check =', Array.isArray(tweets));

/* var a = '#привет!';
console.log(a);
console.log(a.slice(1,a.length));
*/

var splitArg = ' ';

tweetsArray=[];
tweetsArray = tweets.split(splitArg);
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




/*
var count = 0;
var pos = a.indexOf('#');
console.log(a[3]);
console.log('index первой встречающейся буквы = ', pos);
*/


/*
while (pos !== -1) {
  count++;
  pos = a.indexOf('#', pos + 1);
  
  
}
*/

/*
c = [];

if (b[0] != ' '){
	  c.push(b[0]);
  }

if (b[1] != ' '){
	  c.push(b[1]);
  }
  
if (b[2] != ' '){
	  c.push(b[2]);
  }
  
  
  if (b[3] != ' '){
	  c.push(b[3]);
  }

  if (b[4] != ' '){
	  c.push(b[4]);
  }  
  
  if (b[5] != ' '){
	  c.push(b[5]);
  }
  
  
console.log(c);
console.log(c.length);
*/