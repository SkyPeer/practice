function validateForm({formId, formValidClass,formInvalidClass,inputErrorClass}){
        var form = document.getElementById(formId);
        var form1 = document.getElementById('profile-name');
        var form2 = document.getElementById('profile-age');
        var form3 = document.getElementById('profile-phone');
        var form4 = document.getElementById('profile-number');

        
        form.addEventListener('blur',function(event){
                checkForm(event.target);
        }, true);
        form.addEventListener('submit',function(event){
                event.preventDefault(); 
                checkForm(form1);
                checkForm(form2);
                checkForm(form3);
                checkForm(form4);
                if(form1.classList.contains(inputErrorClass)||form2.classList.contains(inputErrorClass)||form3.classList.contains(inputErrorClass)||form4.classList.contains(inputErrorClass)){
                        form.classList.add(formInvalidClass);
                        form.classList.remove(formValidClass);
                }else{
                        form.classList.remove(formInvalidClass);
                        form.classList.add(formValidClass);
                }
        })
        form.addEventListener('focus',function(event){
                event.target.classList.remove(inputErrorClass);
        },true);


        function checkForm(inputForCheck){
                if(inputForCheck.dataset.hasOwnProperty('required') && inputForCheck.value == ''){
                        inputForCheck.classList.add(inputErrorClass);
                }else{

                if(inputForCheck.dataset.hasOwnProperty('validator')){
                        if(inputForCheck.dataset.validator == 'letters'){
                                if(/[0-9]/.test(inputForCheck.value) == true || inputForCheck.value == undefined){
                                        inputForCheck.classList.add(inputErrorClass);
                                }else{
                                        inputForCheck.classList.remove(inputErrorClass);
                                }
                        }


                        if(inputForCheck.dataset.validator == 'number'){
                                if(/[^0-9]/.test(inputForCheck.value) == false){
                                        if(inputForCheck.dataset.hasOwnProperty('validatorMin')){
                                                if(inputForCheck.value <= Number(inputForCheck.dataset.validatorMax) && inputForCheck.value >= Number(inputForCheck.dataset.validatorMin)){
                                                        inputForCheck.classList.remove(inputErrorClass);
                                                }else{
                                                        inputForCheck.classList.add(inputErrorClass);
                                                }

                                        }else{
                                                inputForCheck.classList.remove(inputErrorClass);
                                        }




                                }else{
                                        inputForCheck.classList.add(inputErrorClass);
                                }


                        }
                        if(inputForCheck.dataset.validator == 'regexp'){
                                var tester = new RegExp(inputForCheck.dataset.validatorPattern);
                                if(tester.test(inputForCheck.value) || inputForCheck.value == ''){
                                        inputForCheck.classList.remove(inputErrorClass);
                                }else{
                                        inputForCheck.classList.add(inputErrorClass);   
                                }
                        }
                }
        }
}

}