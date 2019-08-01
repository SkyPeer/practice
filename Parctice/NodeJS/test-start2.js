
// https://nodejs.org/docs/latest/api/process.html
// $ node process-args.js one two=three four
// cmd: node test-start arg=123
// FIXME requre needed
//node test-start.js user=oleg
//console.log('NodeJs StartTestingScript2')

/*process.argv.forEach((val, index) => {
  console.log('val:' + val + ' index:' + index);
});*/

// to start node test-start2.js --user:John

// var argv = require('minimist')(process.argv.slice(2));
// console.log(process.argv[2])
// //console.log(argv['user']); // 'John'

const minimist = require('minimist');

let args = minimist(process.argv.slice(2));

console.log('args:', args.h);