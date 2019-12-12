var s = document.getElementById("t3");
var rnd = Math.floor(Math.random() * (4 - 1 + 1) + 1);
s.src = "img/t3/" + rnd + ".png";

$(function () {
    $('.main-menu a').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href")
            , dn = $(sc).offset().top;
        $('html, body').animate({
            scrollTop: dn
        }, 1000);
    });
});