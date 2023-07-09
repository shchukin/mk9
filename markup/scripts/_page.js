(function($) {

    $('.show-player').on('click', function () {
        $('.page__player:nth-child(2)').show();
        $('.page__handler-for-player-two').hide();
    });

    $('.hide-player').on('click', function () {
        $('.page__player:nth-child(2)').hide();
        $('.page__handler-for-player-two').show();
    });

})(jQuery);
