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
})
