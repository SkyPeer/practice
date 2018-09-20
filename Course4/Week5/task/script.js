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
        console.log(event.target.dataset.validator);
       // console.log(event.target.tagName);
        event.target.style.background = "";
        //checkname(event.target.value);
        //console.log(this.dataset.hasOwnProperty('required')) // this = event.target


        if (this.dataset.hasOwnProperty('letters') /*&& checkletters(event.target.value)*/){
            console.log(' checkletters - OK !!!!')
        }

        if (this.dataset.hasOwnProperty('required') && event.target.value == ''){
            error();
        }




        function error() {
            event.target.style.background = "pink";
            console.log(event.target.id, ' ERROR!!!');
       }
        //console.log
        function checkletters(value) {
            var letters = /^[A-Za-z][А-Яа-я]+$/;
            if (value.match(letters)){return true;}
            else{return false;}
        }



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

