
//node test-start.js user passs
console.log('NodeJs StartTestingScript')

/*process.argv.forEach((val, index) => {
  console.log('val:' + val + ' index:' + index);
});*/

var a = process.argv
console.log(' --- process.argv:', a[2],a[3], '-----', /*typeof a,*/ /*Object.keys(a)*/)


var argv = process.argv.slice(2);
console.dir(argv);