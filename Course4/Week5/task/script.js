'use strict';
var form = document.getElementById("profile");
var inputs = form.querySelectorAll('input');


for (var i=0; i < inputs.length; i++)
{
    // console.log('input:', i ,' ', inputs[i]);

var __input = inputs[i];
var __validator = inputs[i].dataset.validator;


    inputs[i].addEventListener("focus", function( event ) {
        }, true); //фокус


    //if (__validator == 'letters'){__input.addEventListener('blur', checkLetters( event ) )} // потеря фокуса


    if (__validator == 'number'){ __input.addEventListener('blur', function( event ){
        checkNumber(event.target)
    }, true) } // потеря фокуса

    if (__validator == 'regexp'){ __input.addEventListener('blur', function (event) {
        checkRegExp( event.target )
    }, true) }  // потеря фокуса



/*
    inputs[i].addEventListener("blur", function( event ) { // потеря фокуса


        console.log('|| EVENT TARGET', event.target, '||');

        // check name
        if (event.target.dataset.validator == 'letters'){
            if (checkletters(event.target.value) == true){okay('checkname')}
            else
            {error('checkname')}
        }

        //regexp
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
        if (event.target.dataset.validator == 'number'){

            if (checknumber(event.target.value, event.target.dataset.validatorMin, event.target.dataset.validatorMax)){
                okay('checknumber')
            }
            else{
                error('checknumber')
            }

        }


    }, true);*/
}
/*
function checkLetters(value) {

    var lettersEng = /^[A-Za-z]+$/;
    var lettersRus = /^[А-Яа-я]+$/;

    if ( value.match(lettersEng) || value.match(lettersRus) ){
        return true;
    }
    else{
        return false;
    }
}
*/



function checkNumber(target) {

    var __value = target.value;
    var __min = target.dataset.validatorMin;
    var __max = target.dataset.validatorMax;

    console.log('checkNumber DATA  value:', __value, ', min:', __min, 'max', __max)

    //var valueInt = parseInt(__value);
    //console.log('typeof valueInt', typeof valueInt);
    if (__min == undefined || __max == undefined && isNaN(parseInt(__value)) !== true) {
        console.log('NUMBER OK!')
    }
    if (isNaN(parseInt(__value)) !== true && parseInt(__value) >= __min && parseInt(__value) <= __max) {
        console.log('NUMBER OK!')
    }
    else{
        console.log('NUMBER ERROR')
    }
}



function checkRegExp(target) {
    var __pattern = new RegExp(target.dataset.validatorPattern);
    var __value = target.value;
    //console.log('regExpCheck: pattern:', __pattern, ' value:', __value);
    if  (__pattern.test(__value)){ console.log('REGEXP OK')}
    else
    {
        console.log('REGEXP ERROR')
    }
}



/*
function okay(funcName) {
    console.log(event.target.id, ' OKAY!', 'Okayfunc', funcName, 'validator', event.target.dataset.validator);
    event.target.style.background = "#00982354";
}
*/


/*
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

}*/