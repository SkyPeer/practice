let A = {
    test: 1
}

F1(A)

function F1(param) {
    console.log(A)
    F2(param)

}

function F2(param) {
    let B = {...param};
    F3(B)
    F4(B)

}

function F3(param) {
    param.test = 2;
    //console.dir(A)
    console.log(A)
    //console.dir(A.test)
}

function F4(param) {
    param['test'] = 3
    //console.dir(A)
    console.log(A)
    //console.dir(A.test)
}
