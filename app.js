$(document).ready(function() {
    $('.bar').on('click',function(e){
        e.preventDefault();
        $('div.menu ul.menu_bar').toggleClass("menu-show")
    })

    $('.mobile-menu').on('click',function(e){
        e.preventDefault();
        $('div.menu ul.side-bar-mobile').toggleClass("dropdown")
    })

    $('.heart').on('click',function(e){
        $(this).toggleClass("click")
    })


    // $('input[type="text"]').on('click',function(e){

        
    // })
 });