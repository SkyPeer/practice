var lib = require('./test_index.js');

var a = 5;
var result = lib.query(a, lib.select(2),lib.filterIn(3));
console.log('result =', result);