var a = [1,10,2,8,9]
var b = []

    a.forEach(function (item, i, arr) {
        console.log('item = ',item,' i = ',i, 'array = ',arr)
        if (arr[i] > 3) {
            b.push(arr[i])
        }

    })
    console.log(b)