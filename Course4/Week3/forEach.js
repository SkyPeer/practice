var a = [1,10,2,8,9]
var b = []

    a.forEach(function (item, i, arr) {
        if (a[i] > 3) {
            b.push(a[i])
        }

    })
    console.log(b)