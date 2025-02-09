// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Instrucciones del curso, paso 1: Crea una lista de nombre "Amigos" 

let amigos = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto 
// y añadirlo a la lista de amigos creada anteriormente.
//Tareas especificas 

function agregarAmigo(elemento, texto) {
    let elementoHTML = document.getElementById('amigoAgregado');
    elementoHTML.innerHTML = texto;
    return;
}



nombresTextoElementos('h1','Bienvenido al Juego del Amigo Secreto');
nombresTextoElementos('h2','Ingresa el nombre de tus amigos');