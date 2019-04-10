
function hello(arg) {
    let a = arg
    let b = arg - 15
    switch (true) {
        case(a < 5)  :
            console.log('1')
            break
        case(a < 10)  :
            console.log('2')
            break;
        case(b == 0):
            console.log('---ba case')
            break;
        default:
            console.log('i feel good')
    }

}
hello(15)

