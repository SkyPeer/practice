'use strict';

var form = document.getElementById("profile");
//console.log(form);

//var inputs = Array.prototype.slice.call(form.querySelectorAll('input'))
var inputs = form.querySelectorAll('input');

for (var i=0; i < inputs.length; i++)
{
    inputs[i].addEventListener("focus", function( event ) { //фокус
}, true);

    inputs[i].addEventListener("blur", function( event ) { // потеря фокуса


        // check name
        if (event.target.dataset.validator == 'letters'){
            if (checkletters(event.target.value) == true){okay('checkname')}
            else
            {error('checkname')}
        }

        if (event.target.dataset.validator == 'regexp') {

                if(regExpCheck(event.target.value, event.target.dataset.validatorPattern)){
                    okay('regExp')
                }
                else
            {
                error('regExp')
            }
        }

        // check number
        if (event.target.dataset.validator == 'number' /*|| event.target.hasOwnProperty('validator-min') || event.target.hasOwnProperty('validator-max')*/){

            if (checknumber(event.target.value, event.target.dataset.validatorMin, event.target.dataset.validatorMax)){
                okay('checknumber')
            }
            else{
                error('checknumber')
            }

        }

        function error(funcName) {

            console.log('error.value:', event.target.value);

            if (event.target.value == '' && event.target.dataset.hasOwnProperty('required') == false)
            {
                console.log(event.target.id, ' NOT ERROR!!!', 'func', funcName, 'validator', event.target.dataset.validator);
                event.target.style.background = '';
            }
            else
            {
                event.target.style.background = "pink";
                console.log(event.target.id, ' ERROR!!!', 'errorfunc', funcName, 'validator', event.target.dataset.validator);
            }

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

        function regExpCheck(value, pattern) {
            var __pattern = new RegExp(pattern);
            console.log('regExpCheck: pattern:', __pattern, ' value:', value);
            return __pattern.test(value)
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