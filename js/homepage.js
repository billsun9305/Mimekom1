window.addEventListener("scroll", function (event) {
    var top = this.scrollY,
        left = this.scrollX;
    if (hamburger_clicked == 0 && top <= 0) {//需要dropdown是關閉的
        $('#Return-top').addClass("at-top");
        $('#Return-top').removeClass("is-scrolled");
        $('#to_top_icon').hide();
    }
    else {
        $('#Return-top').removeClass("at-top");
        $('#Return-top').addClass("is-scrolled");
        $('#to_top_icon').show();
    }

}, false);