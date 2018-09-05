var divElement = document.querySelector('.root');

divElement.onclick = function(event) {

    alert("target = " + event.target.tagName + ", this=" + this.tagName);

};