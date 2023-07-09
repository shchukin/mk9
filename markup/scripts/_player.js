(function($) {

    $('.hide-player').on('click', function () {
        $(this).parents('.player').addClass('player--hidden');
    });

    $('.show-player').on('click', function () {
        $(this).parents('.player').removeClass('player--hidden');
    });

})(jQuery);
