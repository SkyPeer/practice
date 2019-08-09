const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

console.log("first");
setTimeout(function() {
    console.log("second");
}, 0);
console.log("third");

console.log("first");
setImmediate(function(){
    console.log("second");
});
console.log("third");