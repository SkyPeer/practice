var lib = require('./test_index.js');

var a = 2;
var result = lib.query(a, lib.select(2),lib.filterIn(2));
console.log('result =', result);