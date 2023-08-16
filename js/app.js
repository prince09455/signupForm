$("form").submit(function(e) {
    e.preventDefault();
});



$(".login_submit").click(() => {
    $(".msg").removeClass("d-none")
    setTimeout(function() {
        $('.msg').addClass('d-none');
    }, 1000);
})

$(".btn_signup").click(() => {
    if ($(".login").hasClass("d-none")) {
        return false;
    } else {
        $(".login").addClass("d-none");
        $(".signUp").removeClass("d-none")
    }
})
$(".login_page").click(() => {
    $(".signUp").addClass("d-none");
    $(".login").removeClass("d-none")
})

$(".absolute_btn").click(() => {
    $(".form_sec").removeClass("d-none");
    $(".slide_sec").addClass("d-none");
})