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

httpGet("http://arroway.cloud/wp-content/uploads/2018/12/bg2018.png")
    .then(
        response => console.log(`Fulfilled: ${response}`),
        error => console.log(`Rejected: ${error}`)
    );