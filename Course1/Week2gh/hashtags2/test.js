var tagsupcase = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
var hashtags = [];
var filtredHashtags = [];
// console.log(Array.from(new Set(tagsupcase.map(tag=>tag.toLowerCase()))))

// обработка регистров
for (var i = 0; i < tagsupcase.length; i++){
	hashtags.push(tagsupcase[i].toLowerCase());
}
console.log('исходный массив:', hashtags);

function foo(word)
{
    var count = 0;
	for(var j=0; j < filtredHashtags.length; j++)
	{
		if (word == filtredHashtags[j])
		{
			count = count + 1;
		}
	}
	if (count == 0) {filtredHashtags.push(word)}
	return filtredHashtags;
}
for (var i=0; i<hashtags.length; i++) {
	(foo(hashtags[i]));

}
console.log(filtredHashtags.join(', '));

