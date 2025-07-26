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

/**
 * Gets the items that were selected in the optimal solution
 * @param {number} capacity - The maximum weight the knapsack can hold
 * @param {number[]} weights - Array of item weights
 * @param {number[]} values - Array of item values
 * @returns {number[]} - Array of indices of selected items
 */
function getSelectedItems(capacity, weights, values) {

    // values = [1500, 3000, 2000];
    // weights = [1, 4, 3];
    // capacity = 4
    // n = 3

    const n = weights.length;

    const dp = Array(n + 1).fill()
        .map(() => Array(capacity + 1).fill(0));

    // [
    //     [ 0, 0, 0, 0, 0 ],
    //     [ 0, 0, 0, 0, 0 ],
    //     [ 0, 0, 0, 0, 0 ],
    //     [ 0, 0, 0, 0, 0 ]
    // ]



    const selected = [];

    // Build the dp table
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                                            // 1500      + 0                              0
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    console.log('dp', dp)

    let w = capacity;
    for (let i = n; i > 0; i--) {

        console.log('dp[i][w]', dp[i][w], ' dp[i - 1][w]', dp[i - 1][w])

        if (dp[i][w] !== dp[i - 1][w]) {

            // console.log('dp[i][w]', dp[i][w], ' dp[i - 1][w]', dp[i - 1][w])

            selected.push(i - 1);
            w -= weights[i - 1];
        }
    }
    console.log('selected', selected);
    return selected.reverse();
}

// Example usage
const capacity = 4;
const weights = [1, 4, 3];
const values = [1500, 3000, 2000];

const selectedItems = getSelectedItems(capacity, weights, values);
console.log('Selected items (indices):', selectedItems);
console.log('Selected items details:');
selectedItems.forEach(index => {
    console.log(`Item ${index}: Weight = ${weights[index]}, Value = ${values[index]}`);
}); 