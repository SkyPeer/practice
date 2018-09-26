'use strict';

// Код валидации формы
// Всё происходящее можете отследить прямо в консоли в браузере
function validateForm(toValidate) {

    let form = document.getElementById(toValidate.formId);
    form.addEventListener("submit", handleOnSubmit);

    let successMsg = document.getElementsByClassName("form__success-msg")[0];
    let errorMsg = document.getElementsByClassName("form__error-msg")[0];
    let btn = form.getElementsByTagName("button")[0];

    //Навешиваем onblur обработчики на все input
    let inputs = form.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        // console.log(inputs[i]);
        inputs[i].addEventListener("blur", handleOnBlur);
        inputs[i].addEventListener("focus", handleOnFocus);
    }

    //Нажатие на кнопку не сабмитит форму
    //Вместо этого нажатие на кнопку проверяет, что всё ок
    function handleOnSubmit(event) {
        console.log(event.type);
        console.log(form.getElementsByTagName("button"));
        console.log("Нажатие на кнопку запускает проверку валидность");
        event.preventDefault();
        if (isFormValid(event.target)) {
            event.target.classList.add(toValidate.formValidClass);
            console.log("Форма корректна");
            errorMsg.style.display = "none";
            successMsg.style.display = "block";
        }
        else {
            event.target.classList.add(toValidate.formInvalidClass);
            console.log("Форма не правильная где-то");
            successMsg.style.display = "none";
            errorMsg.style.display = "block";
        }
    }

    //очистит от класса с инвалидностью инпута
    function handleOnFocus(event) {
        event.target.classList.remove(toValidate.inputErrorClass);
        console.log("Зафокусились на инпут. Класс с ошибкой удален, если он присутствовал")
    }

    // проверит на валидность
    // присвоит необходимые классы
    function handleOnBlur(event) {
        console.log("Потерян фокус с инпута");
        if (isInputValid(event.target)) {
            console.log("Ура, инпут валидный!")
        }
        else {
            event.target.classList.add(toValidate.inputErrorClass);
            console.log("Заполненный инпут инвалидный и он получил свой класс с ошибкой");
        }
    }

    //проверка инпута на валидноть в зависимости от того, какой инпут
    function isInputValid(someInput) {
        console.log("Проверка на валидность");
        let result = true;
        if (someInput.getAttribute("name") === "name") {
            console.log("Проверка инпута на инпуте имени");
        }
        if (someInput.getAttribute("name") === "age") {
            console.log("Проверка инпута на инпуте возраста");
        }
        if (someInput.getAttribute("name") === "phone") {
            console.log("Проверка инпута на инпуте телефона");
        }
        if (someInput.getAttribute("name") === "number") {
            console.log("Проверка инпута любимого числа");
        }

        if (someInput.dataset.hasOwnProperty("required")) {
            if (someInput.value.length === 0) {
                console.log("Пустая строка");
                result = false;
            }
        }
        else {
            if (someInput.value.length === 0) {
                console.log("Пустая строка и её заполнение не обязательно. Так что ок");
                return true;
            }
        }

        if (someInput.dataset.hasOwnProperty("validator")) {
            switch (someInput.dataset.validator) {
                case "letters" :
                    console.log("Проверка на letters");
                    if (someInput.value.match(/^[a-zа-я]+$/i) == null) {
                        console.log("letter failed");
                        result = false;
                    }
                    break;
                case "number" :
                    console.log("Проверка на number");
                    if (someInput.value.match(/^[-0-9]+$/i) == null) {
                        console.log("number failed because not a number");
                        result = false;
                    }
                    if (someInput.dataset.hasOwnProperty("validatorMin")) {
                        if (parseInt(someInput.dataset.validatorMin) > parseInt(someInput.value)) {
                            console.log("number failed because less than min");
                            result = false;
                        }
                    }
                    if (someInput.dataset.hasOwnProperty("validatorMax")) {
                        if (parseInt(someInput.dataset.validatorMax) < parseInt(someInput.value)) {
                            console.log("number failed because more than max");
                            result = false;
                        }
                    }
                    break;
                case "regexp":
                    console.log("Проверка на regexp");
                    if (someInput.dataset.hasOwnProperty("validatorPattern")) {
                        if (someInput.value.match(someInput.dataset.validatorPattern) == null) {
                            console.log("number failed because doesn't match the pattern");
                            result = false;
                        }
                    }
                    break;
            }
        }
        // console.log("Потерян фокус на инпуте");
        return result;
    }

    //проверка всей формы на валидность
    function isFormValid(form) {
        let result = true;
        console.log("Попытка проверить форму на валидность");
        for (let i = 0; i < inputs.length; i++) {
            // console.log(inputs[i]);
            if (!isInputValid(inputs[i])) {
                console.log(inputs[i]);
                result = false;
            }
        }
        return result;
    }
}
