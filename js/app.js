$("form").submit(function(e) {
    e.preventDefault();
});

$(".login_page").click(() => {
    $(".signUp").addClass("d-none");
    $(".login").removeClass("d-none")
})
$(".btn_signup").click(() => {
    $(".login").addClass("d-none");
    $(".signUp").removeClass("d-none")
})


$(".absolute_btn").click(() => {
    $(".form_sec").removeClass("d-none");
    $(".slide_sec").addClass("d-none");
})



function isEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
$('form').submit(function(event) {

    $(this).find('#name_feedback').removeClass('d-block');
    $(this).find('#username_feedback').removeClass('d-block');
    $(this).find('#password_feedback').removeClass('d-block');

    var formError = false;
    $(this).find('#formError').text('');

    if (!$(this).find('#name').val()) {
        $(this).find('#name_feedback').addClass('d-block');
    }

    if (!$(this).find('#username').val()) {
        $(this).find('#username_feedback').addClass('d-block');
        formError = true;
    } else if (!isEmail($(this).find('#username').val())) {
        $(this).find('#username_feedback').addClass('d-block');
        $(this).find('#username_feedback').html('Your username is incorrect, please re-enter it');
        formError = true;
    }

    if (!$(this).find('#password').val()) {
        $(this).find('#password_feedback').addClass('d-block');
        formError = true;
    } else if ($(this).find('#password').val().length == 0) {
        $(this).find('#password_feedback').addClass('d-block');
        $(this).find('#password_feedback').html('Please Enter Password');
        formError = true;
    }

    if (formError) {
        console.log(formError);
        return false;
    } else {
        $(".msg").removeClass("d-none")
        setTimeout(function() {
            $('.msg').addClass('d-none');
        }, 1000);
        console.log(formError);
        $(this).find('.login_submit').text('Processing...');
        $(this).find('.login_submit').prop('disabled', true);

    }

});