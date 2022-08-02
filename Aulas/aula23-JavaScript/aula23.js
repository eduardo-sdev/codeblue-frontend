function funcao1() {
    alert("hello world");
}

console.log("hello world");

var nome = 'eduardo'

console.log(nome)

var object = {
    name: 'eduardo',
    sobrenome: 'silva',
}

console.log(object);

function hello() {
    var hour = new Date().getHours();
    var greeting

    if(hour < 18) {
        greeting = 'Bom dia'
    } else {
        greeting = 'Boa noite'
    }

    document.getElementById('hello').innerHTML = greeting;
}

var text =''

var i
for(i = 0; i < 10; i++) {
    text += '<p>' + i + '</p>'
}

document.getElementById('hello').innerHTML  = text;
