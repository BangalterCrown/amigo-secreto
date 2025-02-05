// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function nombresTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

let nombreAmigo = document.getElementById("amigo");
let listadoAmigos = document.getElementById("listaAmigos");
let listaResultados= document.getElementById("resultado");

function ingresaAmigo() {
    let nombre = nombreAmigo.value.trim();
    if(nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListado();
    } else {
        alerta("Nombre duplicado, ingresa uno válido")
    }
    nombreAmigo.value = "";
}

function actualizarListado() {

}


nombresTextoElementos('h1','Amigo Secreto');
nombresTextoElementos('h2','Ingresa el nombre de tus amigos');