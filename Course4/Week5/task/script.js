'use strict';

var form = document.getElementById('profile');

function validateForm(options) {
    var formId = options.formId;
    var formValidClass = options.formValidClass;
    var formInvalidClass = options.formInvalidClass;
    var inputErrorClass = options.inputErrorClass;
    var inputs = form.querySelectorAll('input');

}

//console.log(form);

form.addEventListener('focus', function (event) {
}, true);


form.addEventListener('blur', function (event) {
    //console.log('THIS: ' , this)  // <form>....
    //console.log('event.target', event.target);
    if (event.target.tagName === 'INPUT') {
        checkInput(event.target)
    }

}, true);


console.log(inputs);
inputs.forEach(function (input) {
    input.addEventListener('blur', function (event) {

    }, true)
});

form.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log(event.target);

    //  checkNumber()

}, true);


function checkInput(target) {
//console.log('checkInput targetL', target.dataset.validator)
    var validator = target.dataset.validator;

    switch (validator) {
        case 'letters':
            checkLetters(target);
            break;
        case 'number':
            checkNumber(target);
            break;
        case 'regexp':
            checkRegExp(target);
            break;
    }
}

function checkLetters(target) {
    var value = target.value;
    var pattern = /^[A-Za-zА-Яа-я]+$/;

    if (!pattern.test(value)) {
        //Надо повесить класс из options
    }
    else {
        console.log('checkLetters pass ' + value)
    }
}


function checkNumber(target) {

    var value = +target.value;
    var min = +target.dataset.validatorMin;
    var max = +target.dataset.validatorMax;

    //  console.log('checkNumber DATA  value:', __value, ', min:', __min, 'max', __max)


    //   console.log('typeof valueInt', typeof valueInt, 'valueInt:', valueInt, 'isNaN:', isNaN(valueInt) == true);
    if (isNaN(value)) {
        error('checkNumber', target)
    }

    if (max && value > max) {
        error('checkNumber', target)
    }
    if (min && value < min) {
        error('checkNumber', target)
    }
}

function checkRegExp(target) {
    var __pattern = new RegExp(target.dataset.validatorPattern);
    var __value = target.value;
    //console.log('regExpCheck: pattern:', __pattern, ' value:', __value);
    if (__pattern.test(__value)) {
        okay('checkRegExp')
    }
    else {
        error('checkRegExp', target)
    }
}


function okay(funcName) {
    console.log(' OKAY!', 'Okayfunc:', funcName);
    event.target.style.background = "#00982354";
}

function error(funcName, target) {

    console.log('error.target:', target);
    console.log('error.value:', target.value);

    if (target.value == '' && target.dataset.hasOwnProperty('required') == false) {
        console.log(' NOT ERROR!!!', 'func', funcName, 'validator', target.dataset.validator);
        event.target.style.background = '';
        // event.stopPropagation();
    }
    else {
        console.log('ERROR!!!', 'errorfunc:', funcName, 'validator:', target.dataset.validator);
        //event.stopPropagation();

        //if (event.target !== 'INPUT') {return;}
        //else{event.currentTarget.style.background = "pink";}
        // не удалось остановть с помощью  event.stopPropagation();
        event.target.style.background = "pink";
    }
}
