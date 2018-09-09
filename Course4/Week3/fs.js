var fs1 = require('fs');
var fs2 = require('fs');
var filename1 = 'video.webm';
var filename2 = 'video.3gp';

console.log('begin')
console.time('bigFileTime');
fs1.readFileSync(filename1, 'utf-8');
console.timeEnd('bigFileTime');
console.log('1st fileReadEnd');
console.time('smallFileTime');
fs2.readFileSync(filename2, 'utf-8');
console.timeEnd('smallFileTime');

console.log('END');
//console.log(data)