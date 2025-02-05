// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function nombresTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function ingresaTuNombre() {
    let nombreDeUsuario = document.getElementById('amigo').value
    console.log(nombreDeUsuario);
    return;
}

nombresTextoElementos('h1','Amigo Secreto');
nombresTextoElementos('h2','Ingresa el nombre de tus amigos');
nombresTextoElementos('h1','Amigo Secreto')