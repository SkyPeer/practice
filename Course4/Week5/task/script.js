'use strict';

function validateForm(options) {
    var formId = options.formId;
    var formValidClass = options.formValidClass;
    var formInvalidClass = options.formInvalidClass;
    var inputErrorClass = options.inputErrorClass;

    var form = document.getElementById(formId);

    form.addEventListener('focus', function (event) {

        event.target.classList.remove(inputErrorClass)

    }, true);

    form.addEventListener('blur', function (event) {

        if (event.target.tagName === 'INPUT') {
            checkInput(event.target)
        }

    }, true);

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        console.log(event.target);

        form.classList.remove(formInvalidClass);
        form.classList.remove(formValidClass);
        
        if (form.querySelector('.input_error') !== null)
        {
            form.classList.add(formInvalidClass)
        }
        else{
            form.classList.add(formValidClass)
        }

    }, true);


    function checkInput(target) {

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
            error(target);
        }

    }


    function checkNumber(target) {

        var value = +target.value;
        var min = +target.dataset.validatorMin;
        var max = +target.dataset.validatorMax;

        if (isNaN(value)) {
            error(target);
        }

        if (value < min){error(target);}
        if (max && value > max) {error(target);}
        if (min && value < min) {error(target);}
    }


    function checkRegExp(target) {
        var pattern = new RegExp(target.dataset.validatorPattern);
        var value = target.value;

        if (!pattern.test(value)) {
            error(target);
        }
    }

    function error(target) {
        var dataset = target.dataset.hasOwnProperty('required');

        if (target.value == '' && dataset == false) {
            return;
        }
        else {
            target.classList.add(inputErrorClass);
        }
    }

}

