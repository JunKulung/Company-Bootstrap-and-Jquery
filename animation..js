$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".navbar").css({
                "opacity": "0"})
        } else {
            $(".navbar").css({
                "opacity": "1"})

        }
    })
})
$(document).ready(function() {
    $('.container-fluid').fadeOut(1);

    $('.container-fluid').fadeIn(2500);
});