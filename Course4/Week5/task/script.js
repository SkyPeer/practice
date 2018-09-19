'use strict';

var form = document.getElementById("profile");
console.log(form);

//var inputs = Array.prototype.slice.call(form.querySelectorAll('input'))
var inputs = document.querySelectorAll('input')

for (var i=0; i < inputs.length; i++)
{

    inputs[i].addEventListener("focus", function( event ) {
    console.log(event.target)
    event.target.style.background = "pink";
}, true);

    inputs[i].addEventListener("blur", function( event ) {
        console.log(event.target)
        event.target.style.background = "";
    }, true);

}

