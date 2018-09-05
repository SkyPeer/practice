let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {

    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

httpGet("http://media-2.com/wp-content/uploads/2016/02/iphone2.png")
    .then(
        response => console.log(`Fulfilled: ${response}`),
        error => console.log(`Rejected: ${error}`)
    );