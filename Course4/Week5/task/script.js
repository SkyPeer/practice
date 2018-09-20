'use strict';

var form = document.getElementById("profile");
//console.log(form);

//var inputs = Array.prototype.slice.call(form.querySelectorAll('input'))
var inputs = form.querySelectorAll('input');

for (var i=0; i < inputs.length; i++)
{

    inputs[i].addEventListener("focus", function( event ) {
    //console.log(event.target);
   // console.log(this); // this - узел на котором произошло событие
       // console.log(event)
      //  event.target.style.background = "pink";
}, true);

    inputs[i].addEventListener("blur", function( event ) { // потеря фокуса
        //console.log(event.target);
       // console.log(event.target.tagName);
        event.target.style.background = "";
        //checkname(event.target.value);
        //console.log(this.dataset.hasOwnProperty('required')) // this = event.target

        if (this.dataset.hasOwnProperty('required') && event.target.value == ''){
            error();
        }

        if (this.dataset.validator == 'letters'){
            console.log('letters !!!')
        }

        function error() {
            event.target.style.background = "pink";
            console.log(event.target.id, ' ERROR!!!')
        }
        //console.log
        


    }, true);
}

function checkname(value) {

    if (value === ''){
   //     console.log('error');
        event.target.style.background = "pink";
    }
    else
    {
     //   console.log('ok')
    }
}

