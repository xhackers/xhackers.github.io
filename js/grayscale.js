//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Function to read presentations/data.json and display presentation data
$(function () {
    if (window.location.pathname === '/presentations' || window.location.pathname === '/presentations/') {
        $.getJSON("https://raw.githubusercontent.com/xhackers/xhackers.github.io/master/presentations/data.json",
        function (data) {
            var events = [];
            events = data.Events;
            events.sort(custom_sort);
            var htmlString = "";
            $.each(events, function (i, item) {
                htmlString += '<section class="container meetup-section"><div class="row"><div class="col-lg-8 col-lg-offset-2"><h3>' + item.event_title + '</h3>';
                $.each(item.sessions, function (j, session) {
                    htmlString += '<div class="next-session"><h4>' + session.session_title + '</h4><ul class="list-inline banner-social-buttons">';
                    if (session.slide !== undefined && session.slide !== "") {
                        htmlString += '<li><a href = "' + session.slide + '" class="btn btn-default btn-lg"> <i class="fa fa-file-text fa-fw"></i> <span class="network-name">Slides</span></a></li>';
                    }
                    if (session.code !== undefined && session.code !== "") {
                        htmlString += '<li><a href = "' + session.code + '" class="btn btn-default btn-lg"> <i class="fa fa-github fa-fw"></i> <span class="network-name">Demo</span></a></li>';
                    }
                    if (session.recording !== undefined && session.recording !== "") {
                        htmlString += '<li><a href = "' + session.recording + '" class="btn btn-default btn-lg"> <i class="fa fa-youtube fa-fw"></i> <span class="network-name">Recording</span></a></li>';
                    }
                    htmlString += '</ul></div>';
                });
                if (events.length > 1 && item.event_title !== events[events.length - 1].event_title) {
                    htmlString += '<hr />';
                }
                htmlString += '</div>';
                
            });
            $('#meetup-data').html(htmlString);
        });
    }
});

function custom_sort(a, b) {
    return new Date(b.date) - new Date(a.date);
}


