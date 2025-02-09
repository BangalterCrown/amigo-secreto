// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Instrucciones del curso, paso 1: Crea una lista de nombre "Amigos" 

let amigosLista = [];
console.log(amigosLista)
//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto 
// y añadirlo a la lista de amigos creada anteriormente.
//Tareas especificas 

function agregarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
   return;
}

function ingresaAmigo() {
    let nombreAgregado = document.getElementById('amigoAgregado').value;
    let amigos = nombreAgregado;
    if (nombreAgregado == ("")) {
        alert("Ingresa un nombre correcto");
    } else {
           if (amigosLista.includes(amigos)) {
                return alert("Nombre ya existente"), cajaLimpiaRepetido();
        } else {
            amigosLista.push(amigos);
            return agregarTextoElemento('h3', `${amigosLista}`), cajaLimpia();
        }
     }
     return;
}

function cajaLimpiaRepetido() {
    document.querySelector('#amigoAgregado').value = '';
}

function cajaLimpia() {
    document.querySelector('#amigoAgregado').value = '';
}


function condicionesIniciales() {
    agregarTextoElemento('h1','Bienvenido al Juego del Amigo Secreto');
    agregarTextoElemento('h2','Ingresa el nombre de tus amigos');
}    

function reiniciarElJuego () {
    cajaLimpia();
    condicionesIniciales();
}

condicionesIniciales()