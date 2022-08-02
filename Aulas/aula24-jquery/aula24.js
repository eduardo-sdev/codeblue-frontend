// $(() => { })
//
$('h1').attr('class', 'titulo')

// $('.hide').click(function (){
//     $(this).hide()
// })
    //
$('.hide').click(function (){
    $('.text').hide()
    }
)

$('.show').click(function (){
    $('.text').show()
    }
)

$('.toggle').click(function (){
    $('.text').toggle()
    }
)

// $('.add-class').click(function (){
//         $('.text2').addClass('cor')
//     }
// )

$('.color-class').click(function (){
        $('.text2').toggleClass('cor')
    }
)

$('.animation').click(function (){
        $('.text2').toggleClass('exe')
    }
)

$('.mudar-html').click(function (){
        $('.texte').toggleClass('exe')
    }
)

$('.mudar-img').click(function (){
        $('.img').attr('src', '../Imagens/Fotos/imagem10.jpg')
        $('.img').attr('alt', 'trabalhando com pc')
    }
)

