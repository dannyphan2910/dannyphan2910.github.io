// collapse navbar when the user scrolls down from the top of the document
function initNavBar() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        $("#info-container").css({ flexDirection: "row" });
        $("nav").css('height', "auto");
        if ($(window).height() <= 600 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#welcome-text").hide();
            $("#profile-img").hide();
        }
        $("#welcome-text").css({ marginLeft: "20px", fontSize: "20px", marginBottom: "10px" });
        $("#profile-img").css({ height: "125px", width: "125px", marginBottom: "10px" });
        $("#particles-js").hide();

        // highlight nav button
        var currentScroll = $(this).scrollTop();
        var currentSection;
        var currentDist;
        $(".section-container").each(function () {
            // divPosition is the position down the page in px of the current section we are testing      
            var divPosition = $(this).offset().top;
            var distance = Math.abs(divPosition - currentScroll);
            if (!currentSection || !currentDist || (currentSection && distance < currentDist)) {
                // We have either read the section or are currently reading the section so we'll call it our current section
                currentSection = $(this);
                currentDist = distance;
            }
        });
        if (currentSection) {
            var idShort = currentSection.attr('id').split("-")[0];
            $(".nav-btns").children().removeClass('active');
            $("#nav-" + idShort).addClass('active');
        }
    } else {
        if ($(window).width() > 600 && $(window).height() > 400) {
            $("#info-container").css({ flexDirection: "column" });
        }
        $("nav").css({ height: '55vh' });
        $("#welcome-text").show();
        $("#welcome-text").css({ marginLeft: "0", fontSize: $(window).width() < 600 ? '20px' : '2em', marginBottom: "50px" });
        $("#profile-img").show();
        $("#profile-img").css({ height: '300px', width: '300px', marginBottom: "50px" });
        $("#particles-js").show();

        $(".nav-btns").children().removeClass('active');
    }
}
$(window).scroll(() => initNavBar());

// particles 
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

function navigate(navBtn, divId) {
    navBtnClicked = true;
    if ($(window).height() < 600) {
        var initialOffset = $(window).height() * 0.19;
    } else if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        var initialOffset = $(window).height() * 0.1335;
    } else {
        var initialOffset = $(window).height() * 0.228;
    }
    $('html, body').animate({ scrollTop: $('#' + divId).offset().top - ($(window).scrollTop() === 0 ? initialOffset : $("nav").height()) }, 'slow');
}