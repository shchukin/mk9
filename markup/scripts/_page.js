(function($) {

    $('.show-player').on('click', function () {
        $('.player--two').show();
        $('.show-player').hide();
        $('.page').addClass('page--player-2-active');
    });

    $('.hide-player').on('click', function () {
        $('.player--two').hide();
        $('.show-player').show();
        $('.page').removeClass('page--player-2-active');
    });

})(jQuery);
