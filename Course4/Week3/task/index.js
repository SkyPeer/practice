/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    var promises = []
    
    for (var i=0;  i < operations.length; i++)
    {
        promises.push(new Promise(function (resolve, reject) {

            var aaa = operations[i];
            aaa(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })

        }))
    }
    Promise.all(promises).then(
        function (result) {callback(null, result);},
        function (error) {callback(error, null);}
    )
};