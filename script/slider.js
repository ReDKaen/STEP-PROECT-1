$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.content-box');
    var totalItems = items.length;
    var arrayOfIcon = $('.icon-of-slider')

    items.hide();
    items.eq(currentIndex).show();

    function showNext() {
        arrayOfIcon.eq(currentIndex).removeClass("active")
        items.eq(currentIndex).hide();
        currentIndex = (currentIndex + 1) % totalItems;
        items.eq(currentIndex).fadeIn();
        arrayOfIcon.eq(currentIndex).addClass("active")
    }

    function showPrev() {
        arrayOfIcon.eq(currentIndex).removeClass("active")
        items.eq(currentIndex).hide();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        items.eq(currentIndex).fadeIn();
        arrayOfIcon.eq(currentIndex).addClass("active")
    }

    $('.button-of-slider.next').click(function () {
        showNext();
    });

    $('.button-of-slider.prev').click(function () {
        showPrev();
    });

    $('.icon-of-slider').click(function () {
        var index = $(this).index() - 1;
        items.eq(currentIndex).hide();
        currentIndex = index;
        items.eq(currentIndex).fadeIn();
        arrayOfIcon.removeClass('active');
        $(this).addClass('active');
    });
});
