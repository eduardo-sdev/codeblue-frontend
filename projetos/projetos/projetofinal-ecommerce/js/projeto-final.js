$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 70){
            $("header").addClass('topo-fixo')
        }else{
            $("header").removeClass('topo-fixo')
        }
    })

    $(".menu-hamburger").click(function(){
        $(".menu-hamburger, nav").toggleClass('show')
    })

    function resizableCards() {
        if($(window).width() <= 760){
            $(".section-products .card").hide()
            $(".section-products .card:hidden").slice(0, 4).show()
        } else {
            $(".section-products .card:hidden").show()
        }
    }

    $("#see-more-product").on("click", function() {
        if($(".section-products .card:hidden").length == 0){
            $(".section-products .card").hide()
            $(".section-products .card:hidden").slice(0, 4).show()
        } else {
            $(".section-products .card").slideDown()
            $("#see-more-product").html('See less')
        }
    })

    $(window).resize(function() {resizableCards()})
    resizableCards()
})

