/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    var promises = []

    operations.forEach(function (operation, indexOfOperations, operationsArray) {

        promises.push(new Promise(function (resolve, reject) {

            var __operation = operationsArray[indexOfOperations];
            __operation(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        }))
    })

    Promise.all(promises).then(
        function (result) {callback(null, result);},
        function (error) {callback(error, null);}
    )
};