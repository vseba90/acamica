/** global $ */
$(document).ready(init);

function init() {
    assignForHandlers();
}

function assignForHandlers() {
    $('form').on('submit', onSubmitHandler);
}



function onSubmitHandler() {
    let error = false;

    let btn = $('#submit');
    let name = $('#name');
    let password = $('#password');   

    if (name.val() === '') {
        error = true;
        name.addClass('error');
    } else {
        name.removeClass('error');
    }
    if (password.val() === '') {
        error = true;
        password.addClass('error');
    } else {
        password.removeClass('error');
    }
    if(name.val() === '' && password.val() === ''){
        btn.addClass('ok');
    }
    if(error === true){
        event.preventDefault()
    }
}

