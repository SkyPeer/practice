'use strict';

var form = document.getElementById('profile');
var inputs = form.querySelectorAll('input');

for (var i=0; i < inputs.length; i++)
{
    // console.log('input:', i ,' ', inputs[i]);

    
var __input = inputs[i];
var __validator = inputs[i].dataset.validator;


    inputs[i].addEventListener("focus", function( event ) {
        }, true); //фокус


    if (__validator == 'letters'){__input.addEventListener('blur', function( event ) {
        checkLetters( event.target )
    },true )} // потеря фокуса


    if (__validator == 'number'){ __input.addEventListener('blur', function( event ){
        checkNumber( event.target )
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

function checkLetters(target) {

    var __value = target.value;
    var lettersEng = /^[A-Za-z]+$/;
    var lettersRus = /^[А-Яа-я]+$/;

    if ( __value.match(lettersEng) || __value.match(lettersRus) ){
        okay('checkLetters')
    }
    else{
        error('checkLetters', target)
    }
}




function checkNumber(target) {

    var __value = target.value;
    var __min = target.dataset.validatorMin;
    var __max = target.dataset.validatorMax;

  //  console.log('checkNumber DATA  value:', __value, ', min:', __min, 'max', __max)

    var valueInt = parseInt(__value);
 //   console.log('typeof valueInt', typeof valueInt, 'valueInt:', valueInt, 'isNaN:', isNaN(valueInt) == true);


    if (isNaN(valueInt) == true || (valueInt >= __min && valueInt <= __max) == false)
    {
        error('checkNumber', target)
    }
    if (isNaN(valueInt) == false && (__min == undefined || __max == undefined)) {
        okay('checkNumber')
    }
    if (isNaN(valueInt) == false && (valueInt >= __min && valueInt <= __max) == true) {
        okay('checkNumber')
    }


}


function checkRegExp(target) {
    var __pattern = new RegExp(target.dataset.validatorPattern);
    var __value = target.value;
    //console.log('regExpCheck: pattern:', __pattern, ' value:', __value);
    if  (__pattern.test(__value)){
        okay('checkRegExp')}
    else
    {
        error('checkRegExp', target)
    }
}



function okay(funcName) {
    console.log(' OKAY!', 'Okayfunc:', funcName);
    event.target.style.background = "#00982354";
}




function error(funcName, target) {

    console.log('error.value:', target.value);

    if (target.value == '' && target.dataset.hasOwnProperty('required') == false)
    {
        console.log(' NOT ERROR!!!', 'func', funcName, 'validator', target.dataset.validator);
        event.target.style.background = '';
    }
    else
    {
        event.target.style.background = "pink";
        console.log('ERROR!!!', 'errorfunc:', funcName, 'validator:', target.dataset.validator);
    }

}