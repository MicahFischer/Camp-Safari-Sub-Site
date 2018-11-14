/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Hide header below 150px on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() < 150) {
        $('nav a').css({
            'margin': '70px 20px'
        });
    }
});
// Show header above 50px on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('nav a').css({
            'margin': '40px 20px'
        });
    }
});