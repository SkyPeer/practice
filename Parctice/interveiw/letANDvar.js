function doSomething() {
    var myVar = 1;
    function vahhh() {
        myVar = 2;
        console.log('vahhh = ' + myVar);
    }
    vahhh()
    console.log('doSomething ' +  myVar);
}

doSomething();

console.log('-----------------------------------------')
/*
function doSomething() {
    let myVar2 = 1;
    if (true) {
        let myVar2 = 2;
        console.log(myVar2);
    }
    console.log(myVar2);
}

doSomething();
*/

