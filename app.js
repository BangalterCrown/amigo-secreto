// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Instrucciones del curso, paso 1: Crea una lista con el nombre "Amigos" 
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
function condicionesIniciales() {
    agregarTextoElemento('h1','¡Bienvenidos al Juego: Amigo Secreto!');
    agregarTextoElemento('h2','Ingresa los nombres de tus amigos:');
}
//Se agrega esta funcion para poder enlistar de forma indidual y organizada
function listaActualizada() {
    let nuevaLista = document.getElementById("listaAmigos");
    nuevaLista.innerHTML = amigosLista.map(amigoAgregado =>`<li> • ${amigoAgregado}</li>`).join('');
}
//Funcion usada especificamete para la interaccion del usuario con el input, donde reacciona a diferentes condiciones
function ingresaAmigo() {
    let nombreAgregado = document.getElementById('amigoAgregado').value;
    let amigos = nombreAgregado;
    if (nombreAgregado == ("")) {
        alert("Ingresa un nombre correcto");
    } else {
           if (amigosLista.includes(amigos)) {
                return alert("Nombre ya existente"), cajaLimpia();
        } else {
            amigosLista.push(amigos);
            return listaActualizada(), cajaLimpia();
        }
     }
     return;
}
//Funcion usada para limpiar la caja de input cuando se agrega un nombre repetido o el campo esta vacio
function cajaLimpia() {
    document.querySelector('#amigoAgregado').value = '';
}
//Funcion para agregar la accion de Sorteo del Amigo Secreto   
function sortearAmigo() {
    if (amigosLista.length === 0) {
      alert('No hay amigos en la lista para sortear.');
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigosLista.length);
    const amigoSorteado = amigosLista[indiceAleatorio];

      //Desplaza elemento de lista sorteada
  amigosLista.splice(indiceAleatorio, 1);

    // Ocultar la lista al momento de sortear
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
  
    //Establece el resultado del amigo sorteado
    const resultado = document.getElementById('resultadoSorteo');
    resultado.innerHTML = `El Amigo Secreto es: <strong>${amigoSorteado}</strong> 🎉`;
  }
  
  //Función para restablecer el juego
  function reiniciarElJuego() {
    amigosLista.length = 0;
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    listaAmigos.style.display = '';
    const resultado = document.getElementById('resultadoSorteo');
    resultado.innerHTML = '';
    alert('El sorteo ha sido reiniciado.');
  }
// Repetimos las condiciones iniciales
condicionesIniciales();

