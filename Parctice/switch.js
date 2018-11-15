
function hello(arg) {
    let a = arg

    switch (true) {
        case(a < 5)  :
            console.log('1')
            break
        case(a < 10)  :
            console.log('2')
            break;
        default:
            console.log('i feel good')
    }

}
hello(15)

