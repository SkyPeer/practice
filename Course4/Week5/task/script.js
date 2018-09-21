'use strict';

var form = document.getElementById("profile");
//console.log(form);

//var inputs = Array.prototype.slice.call(form.querySelectorAll('input'))
var inputs = form.querySelectorAll('input');

for (var i=0; i < inputs.length; i++)
{

    inputs[i].addEventListener("focus", function( event ) { //фокус
    //console.log(event.target);
   // console.log(this); // this - узел на котором произошло событие
       // console.log(event)
      //  event.target.style.background = "pink";
}, true);

    inputs[i].addEventListener("blur", function( event ) { // потеря фокуса

/*        if (event.target.dataset.hasOwnProperty('required')){
            if (event.target.value == ''){error('required');}
            else{defaultFunc()}

        }*/

        // check name
        if (event.target.dataset.validator == 'letters'){
            if (checkletters(event.target.value) == true){okay('checkname')}
            else
            {error('checkname')}
        }

        if (event.target.dataset.validator == 'number' || event.target.hasOwnProperty('validator-min') || event.target.hasOwnProperty('validator-max')){

            if (checknumber(event.target.value, event.target.dataset.validatorMin, event.target.dataset.validatorMax)){
                okay('checknumber')
            }
            else{
                error('checknumber')
            }



            /* console.log(event.target.dataset.validator-max);*/
        }


     /*   else
        {
            error('letters');
        } */



        function defaultFunc() {
            event.target.style.background = ''
        }

        function error(funcName) {
            event.target.style.background = "pink";
            console.log(event.target.id, ' ERROR!!!', 'errorfunc', funcName, 'validator', event.target.dataset.validator);
       }

       function okay(funcName) {
           console.log(event.target.id, ' OKAY!', 'Okayfunc', funcName, 'validator', event.target.dataset.validator);
           event.target.style.background = "#00982354";
       }

       function checkletters(value) {

                    var lettersEng = /^[A-Za-z]+$/;
                    var lettersRus = /^[А-Яа-я]+$/;

            if ( value.match(lettersEng) || value.match(lettersRus) ){
                return true;
            }
            else{
                return false;
            }
        }

        function checknumber(value, min, max) {
         /*  console.log('checknumber value: ', value, ' min: ',min, ' max:', max)
           console.log('typeof value', typeof value); */
           var valueInt = parseInt(value);
            console.log('typeof valueInt', typeof valueInt);
           if (min == undefined || max == undefined){
                return (isNaN(parseInt(value)) !== true);
            }
            else{
               return (isNaN(parseInt(value)) !== true && parseInt(value) >= min && parseInt(value) <= max)
           }
        }

    }, true);
}



