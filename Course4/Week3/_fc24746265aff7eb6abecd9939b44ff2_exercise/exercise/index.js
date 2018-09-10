/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {


        for (var i = 0; i < operations.length; i++) {
            operations[i] = new Promise(function (resolve, reject) {

            })

    }

    console.log('operatios: ',operations)
    console.log('callback: ', callback)
};