import $ from 'jquery';

$(document).ready(() => {
    $(".app-footer .menu").click((e) => {
        const menu = e.target.parentNode;
        $(menu).toggleClass('open');
    })

    $(".processed-button").click((e) => {
        e.preventDefault();
        e.stopPropagation();
        debugger;

    }, )

    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        const id = $(this).attr('href');

        // target element
        const $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        const pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
    
})
