$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".navbar ").css({
                "padding": "5px",
                "font-size": "17px"
            })
        } else {
            $(".navbar").css({
                "padding": "0",
                "font-size": "15px"
            })

        }
    })
})


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".navbar-brand ").css({

                "font-size": "20px"
            })
        } else {
            $(".navbar-brand ").css({

                "font-size": "17px"
            })

        }
    })
})


$(document).scroll(function () {
    if (window.scrollY > 200) {
        $(".text-left i").animate({
            left: '50px',
            opacity: '1'
        }, 1500)


    }
})

$(document).scroll(function () {
    if (window.scrollY > 200) {
        $(".heading, .subhead").animate({
            opacity: '1'
        }, 1000)


    }
})


$(document).ready(function () {
    $(".jumbotron h1,.jumbotron p,#index input,#index button").animate({
        opacity: '1'
    }, 1500);
})


$(document).ready(function () {
    setInterval(function () {
        $(".jumbotron h1").fadeOut(function () {
            $(this).fadeIn();
        });
    }, 200)
});


$(document).ready(function () {

    $(".icon i").hover(function () {
        $(this).animate({
            top: "-10"
        });
    }, function () {
        $(this).animate({
            top: "0"
        });
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".jumbotron").css({
                "opacity": "0"
            })
        } else {
            $(".jumbotron").css({
                "opacity": "1"
            })

        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $(".first").css({
                "opacity": "0"
            })
        } else {
            $(".first").css({
                "opacity": "1"
            })

        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $(".second").css({
                "opacity": "0"
            })
        } else {
            $(".second").css({
                "opacity": "1"
            })

        }
    })
})


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".third").css({
                "opacity": "0"
            })
        } else {
            $(".third").css({
                "opacity": "1"
            })

        }
    })
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2200) {
            $(".fourth, .fifth").css({
                "opacity": "0"
            })
        } else {
            $(".fourth, .fifth").css({
                "opacity": "1"
            })

        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2700) {
            $(".six").css({
                "opacity": "0"
            })
        } else {
            $(".six").css({
                "opacity": "1"
            })

        }
    })
})



$(document).ready(function(){
    $("#index button").click(function(){
        alert("NO ITEM");
    });
});