(function($) {

    $('.show-player').on('click', function () {
        $('.page__player:nth-child(2)').show();
        $('.page__handler-for-player-two').hide();
        $('.page').addClass('page--player-2-active');
    });

    $('.hide-player').on('click', function () {
        $('.page__player:nth-child(2)').hide();
        $('.page__handler-for-player-two').show();
        $('.page').removeClass('page--player-2-active');
    });

})(jQuery);
