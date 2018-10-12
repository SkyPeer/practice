var form = document.querySelector('form');
//console.log(form);


form.addEventListener('submit', function (event) {
    event.preventDefault();
    //console.log('submit event', event);
    //console.log('submit event target', event.target);

});

var input = document.getElementById('input1');
//console.log(input.value);

var button = document.getElementById('button1');

button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    console.log('input.value', input.value)
})

/*function click() {
    //console.log(click);
}*/

