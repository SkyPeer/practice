var arr = [1, 7, 6, 5, 4, 4, 770, 65, 25, 14];

var fs = require('fs'); //   'fs' название модуля fs - FileSys в Node.js

    var bigFileSize = new Promise(function (resolve, reject) {

            console.time('bigFile');

                var stat = fs.statSync('bigvideo.avi');

            console.timeEnd('bigFile');

    resolve(stat.size);
    reject(consoleError);

});

bigFileSize
    .then(bigFileSizeMB, consoleError)
    .then(bigFileSizeLog, consoleError);

function bigFileSizeMB (){
    return arguments[0] / 1024 / 1024
}

function bigFileSizeLog (){
    console.log('FileSize: ', arguments[0].toFixed(2) + ' mb')
}

function consoleError() {
    console.log('ERROR !!!!!!!!!!!!!')
}

console.log('arr.length: ', + arr.length, arrayTestFunction());

function arrayTestFunction() {
    return arr.splice(1,4)
}
