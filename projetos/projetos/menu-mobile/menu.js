$(document).ready(function() {
    $('.icon-menu,.close-menu').click( function(){
        $(".menu").toggleClass("show")
    })

    $('.menu p').click( function(){
        $(this).next('.sub-menu').toggle('fast')
        $(this).toggleClass('show')
    })
})

