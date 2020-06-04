// particles 
particlesJS.load('particles-js', 'assets/particles.json');

var collapsedNavHeight = $(window).height() * 0.2;
// collapse navbar when the user scrolls down from the top of the document
function initNavBar() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        $("#info-container").css({ flexDirection: "row" });
        $("nav").css({height: "auto"});
        collapsedNavHeight = $("nav").height();
        $(".section-container").css({minHeight: $(window).height() - collapsedNavHeight});
        if ($(window).width() <= 400 || $(window).height() <= 600 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            $("#welcome-text").hide();
            $("#profile-img").hide();
        }
        $("#welcome-text").css({ marginLeft: "20px", fontSize: "20px", marginBottom: "10px", color: "#d8e2dc" });
        $(".name").css({backgroundColor: "#d8e2dc", color: "#3d405b"});
        $("#profile-img").css({ height: "125px", width: "125px", marginBottom: "10px" });
        $("#particles-js").hide();
        $(".arrow").hide();
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
        if ($(window).width() > 600 || $(window).height() > 400) {
            $("#info-container").css({ flexDirection: "column" });
        }
        $("nav").css('height', "100%");
        $("#welcome-text").show();
        $("#welcome-text").css({ marginLeft: "0", fontSize: $(window).width() < 600 ? '20px' : '2em', color: "#d8e2dc" });
        $(".name").css({backgroundColor: "#d8e2dc", color: "#3d405b"});
        $("#profile-img").show();
        $("#profile-img").css({ height: '300px', width: '300px', marginBottom: "50px" });
        $("#particles-js").show();
        if ($(window).height() > 660) {
            $(".arrow").show();
        }
        $(".nav-btns").children().removeClass('active');
    }
}
$(window).scroll(() => initNavBar());

function navigate(divId) {
    $('html, body').animate({ scrollTop: $('#' + divId).offset().top - ($(window).scrollTop() == 0 ? collapsedNavHeight : $("nav").height())}, 'slow');
}



