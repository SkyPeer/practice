var tagsupcase = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
var hashtags = [];
var filtredHashtags = [];
// console.log(Array.from(new Set(tagsupcase.map(tag=>tag.toLowerCase()))))

// обработка регистров
for (var i=0; i < tagsupcase.length; i++){
	hashtags.push(tagsupcase[i].toLowerCase());
}
console.log('исходный массив:', hashtags);

/*
function foo(word)
{
console.log('отпр. в фильтр: ', hashtags);
if (word == 'coursera'){return true};
console.log(filtredHashtags);
}

filtredHashtags = (hashtags.filter(foo));
console.log('отфильтрованный:',filtredHashtags);
*/

function foo(word)
{
    var count = 0;
	for(var j=0; j < filtredHashtags.length; j++)
	{
		if (word == filtredHashtags[j]){
			count = count + 1;
		}
	}
    //console.log(count, word);
	if (count == 0) {filtredHashtags.push(word)}
    console.log(filtredHashtags, filtredHashtags.length, count);
}
//console.log(filtredHashtags, filtredHashtags.length);
//console.log(count);

for (var i=0; i<hashtags.length; i++) {
	foo(hashtags[i]);
        /*filtredHashtags.push(hashtags[i]) */
}

//console.log('filter:',filtredHashtags);

/*
 var count1 = 0;
var count2 = 0;

function foo(hashtag) {	
	
	
	for (var i=0; i < hashtags.length; i++){
		if (  hashtags[i].toLowerCase() != hashtag.toLowerCase()){
		count1++;	
		}
		else{
		count2++;
		}

	}
}




a = [12, 5, 8, 130, 44, 12];

function isBigEnough(value) {
  return value;
}
var filtered = a.filter(isBigEnough);

console.log(filtered);

/*
var hashtagsfiltered = ['coursera', 'JavaScript', 'Coursera', 'script', 'programming'];

var hashtagsfiltered = [];

function cheknewarray(hashtag){
	for (var f=0; f < hashtagsfiltered.length; f++)
	{
		if (hashtagsfiltered[f] == hashtag)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}


for (var i = 0; i < hashtags.length; i++){
		if (cheknewarray(hashtags[i]) == false )
		{
			hashtagsfiltered.push(hashtags[i]);
			console.log(cheknewarray(hashtags[2]));
			console.log('1', i);
		
		}
		else
		{
		console.log(hashtags[i]);
		console.log(cheknewarray(hashtags[2]));
		console.log('2', i);
		
		}
	}

/*

	
	for (var i=0; i < hashtags.length -1; i++){
		for (var j=i+1; j < hashtags.length; j++)
		{
				if ( hashtags[i].toLowerCase() != hashtags[j].toLowerCase() ) 
				{
					hashtagsfiltered.push(hashtags[i].toLowerCase());
					i++}
				
				else
				{ i++;}
		}
	
	}
*/
	
// console.log(hashtagsfiltered);

/*

/*
if (cheknewarray(hashtags[0]) == false){
	console.log(hashtags[0]);
	console.log('ok!!!!');
	};
	

if (cheknewarray(hashtags[0]) == true){
	console.log(hashtags[0])
	console.log('ok!!!!');
	}
	
*/