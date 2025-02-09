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
// Se agrega esta funcion para poder enlistar de forma indidual y organizada
function listaActualizada() {
    let nuevaLista = document.getElementById("listaAmigos");
    nuevaLista.innerHTML = amigosLista.map(amigoAgregado =>`<li> • ${amigoAgregado}</li>`).join('');
}

// Funcion usada especificamete para la interaccion del usuario con el input, donde reacciona a diferentes condiciones
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
            return listaActualizada(), cajaLimpia();
        }
     }
     return;
}
// Funcion usada para limpiar la caa de input cuando se repite el nombre ingresado
function cajaLimpiaRepetido() {
    document.querySelector('#amigoAgregado').value = '';
}
// Funcion usada para limpiar la caja de input cuando se agrega un nuevo nombre
function cajaLimpia() {
    document.querySelector('#amigoAgregado').value = '';
}

// funcion realizada para la impresion de los texto en los elementos deseados
function condicionesIniciales() {
    agregarTextoElemento('h1','Bienvenidos al Juego del Amigo Secreto');
    agregarTextoElemento('h2','Ingresa el nombre de tus amigos');
}    

function reiniciarElJuego () {
    cajaLimpia();
    condicionesIniciales();
}

condicionesIniciales()