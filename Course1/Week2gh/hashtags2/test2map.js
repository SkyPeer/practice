//Alex K.
var tagsupcase = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
console.log((Array.from(new Set(tagsupcase.map(tag=>tag.toLowerCase())))).join(', '))

