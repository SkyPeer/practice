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
