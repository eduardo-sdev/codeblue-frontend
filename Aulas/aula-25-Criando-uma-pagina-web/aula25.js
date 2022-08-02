$(document).ready(function() {
    $('.fecha-modal, .fundo-modal').click(function(){
        $('.container-modal').hide();
    })

    // topo fixer
    $(window).scroll(function(){
        if(jQuery(this).scrollTop() > 100){
            $("header").addClass("topo-fixo");
        }else{
            $("header").removeClass("topo-fixo");
        }
    })

    $('.menu p').click( function(){
        $(this).next('.sub').toggle('fast')
        $(this).toggleClass('open')
    })
})

