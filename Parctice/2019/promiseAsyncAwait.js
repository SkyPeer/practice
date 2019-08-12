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


let testSize = async function testSize(arg){
    let stat1 = await fs.statSync('bigvideo.avi');
    let stat2 = await fs.statSync('bigvideo.avi');
    console.log("testSize1", arg, 'stat:', stat1.size)
    console.log("testSize2", arg, 'stat:', stat2.size)
    bigFileSizeLog(stat1.size / 1024 / 1024)
    bigFileSizeLog(stat2.size / 1024 / 1024)
}

testSize('aaaaarg')



function getText(text) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(text)
        }, 1000)
    })
}

function log(text) {
    console.log(`текст: ${text}`)
}

async function test1() {
    let text = await getText('hello2');
    log(text)
}

async function test2() {
    let text = await getText('hello3');
    return text;

}

//пример с промисом
getText('hello1').then(log);

//вызов асинхронной функции
test1();

//return из асинхронной функции
let t = test2();
log(t); /* << ---- текст: [object Promise], выполняется не должыдаясь async function return text; */
