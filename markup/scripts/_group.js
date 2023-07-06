(function($) {

    $('.group__handler').on('click', function () {
        $(this).parents('.group').toggleClass('group--expanded');
    })

})(jQuery);
