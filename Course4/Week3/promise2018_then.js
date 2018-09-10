/*console.log('1');
setTimeout(function(){ console.log('2'); }, 3000);
console.log('3');
setTimeout(function(){ console.log('4'); }, 1000);
*/

var arr = [1, 7, 6, 5, 4, 4, 770, 65, 25, 14];

var fs = require('fs'); //   'fs' название модуля fs - FileSys в Node.js

var bigFileSize = new Promise(function (resolve, reject) {
    console.time('bigFile');
   var stat = fs.statSync('video.webm');
    resolve(stat.size)
   /*
   fs.readFile('video.webm', function callBackAfterRead(err, data)   //- Эта функция будет вызывана, когда завершится операция чтения файла.
                                                                    //  Функция получит два параметра. Первый - информация о каких-либо ошибках, второй - содержимое файла.
   {
        console.timeEnd('bigFile');

        if (err){
            reject('ошибка!'); //reject(err);
        }
        else{
            resolve(1
                //console.log('Filesize: ' + Math.round((stat.size / 1024 / 1024 / 1024) * 100) / 100 + ' Gb')
            )
        }
    })*/
});

bigFileSize
    .then(bigFileSizeMB, console.error)
    .then(bigFileSizeLog, console.error)

function bigFileSizeMB (){
    return arguments[0] / 1024 / 1024
}

function bigFileSizeLog (){
    console.log(arguments[0].toFixed(2) + ' mb')
}

//promise.then
/*var promise2 = new Promise(function (resolve, reject) {
    console.time('smallFile');
     var stat = fs.statSync('video.3gp');
    fs.readFile('video.3gp', function (err, data) {
        console.timeEnd('smallFile');
        if (err){
            reject(err);
        }
        else{
            resolve('ok!')
        }
    })
}); */



console.log('arr.length: ', + arr.length, arrayTestFunction());
/*
function myFunction() {
    setInterval(alertFunc, 2000);
}
function alertFunc() {
    console.log(promise);
}

myFunction();
*/
function arrayTestFunction() {
    return arr.splice(1,4)
}
//function  bigfilesizelog() {
//    console.log(bigFileSize)
//}
//setTimeout(bigfilesizelog, 2000);