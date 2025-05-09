console.time("check time complexity");

const getMatrix = (maxX, maxY) => {
    const arr = [];
    for (let i = 0; i<maxX; i++) {
        const row = []
        arr.push(row)
        for (let j = 0; j < maxY; j++) {
            row.push(Math.floor(Math.random() * 10));
        }
    }
    return arr;
}

const items = [
    {
        name: 'Guitar',
        weight: 1,
        cost: 1500
    }, {
        name: 'Stereo',
        weight: 4,
        cost: 3000},
    {
        name: 'Laptop',
        weight: 3,
        cost: 2000
    }
]

const capacity = 4;

const getOptionalValue = () => {

    const sortedValues = [...items]
    // console.log(sortedValues);

    // let prevMax = 0;
    const matrix = [];

    let counter = 0

    for (let i = 0; i < items.length; i++) {
        matrix.push([]);

        // console.log('-------')
        // console.log(sortedValues[i]);
        // // console.log('matrix', matrix);
        // console.log('-------')

        for (let j = 0; j < capacity; j++) {

            // j - capacity

            const curValue = sortedValues[i]; // {}
            // const currentCost = curValue.cost;
            const prevMax = i > 0 ? matrix[i-1][j] : 0;

            const space = (i > 0 && j >= curValue.weight) ? matrix[i - 1][j - curValue.weight] : 0
            const val = prevMax + space

            matrix[i].push(Math.max(prevMax, val));

            // ++counter

            // matrix[i].push(prevMax);
            // matrix[i].push(prevMax);
        }
    }

    console.log('counter', counter)
    return matrix


}

const result = getOptionalValue();
console.log(result);


// const printMatrix = (matrix) => {
//     const print = matrix.map((d) => d.join(" | ")).join("\n")
//     return console.log(print)
// }
//
//
// const foo = () => {
//     const matrix = getMatrix(4,4)
//     printMatrix(matrix);
// }


// foo()


console.timeEnd("check time complexity");
