/*console.log("first");
setTimeout(function() {
    console.log("second");
}, 0);
console.log("third");*/

/*
console.log("first");
setImmediate(function(){
    console.log("second");
});
console.log("third");*/


/*ORIGINAL*/

/*const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 300);
}*/

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i)

}
function fn(item , index) {
    setTimeout(function() {
        console.log('Index: ' + index + ', element: ' + item);
    }, index*3000);
}


