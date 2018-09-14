/**
 * @param {Function[]} operations
 * @param {Function} callback
 */

var promise = new Promise (function(resolve, reject) {

    var aaa = function (next) {
        setTimeout(function () {next(null, '500ms');}, 500);} //orig

    aaa(function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
});


/*promise.then(function (data) {
    console.log('Promise = ', data);
    }
    ,console.error);
*/
var promise2 = new Promise (function (resolve, reject) {


    var aaa = function(next) {setTimeout(function ()
    {next('ERROR' /*null, '500ms'*/);},

        10);};

    aaa(function (err, data) {
        if (err) {
            resolve(err);
        } else {
            resolve(data);
        }
    })
});

Promise.all([promise, promise2]).then(function (data) {
    console.log(data)
});

/*
promise2.then(function (data) {
        console.log('Promises = ', data);
    }
    ,console.error);
*/


