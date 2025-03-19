// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = []

//Crear un array para almacenar los nombres
let amigos = [];

//1. Implementa una función para agregar amigos
//función para agregar amigos
function agregarAmigo(){
    let nombreAmigoX = document.getElementById('amigo');
    let amigoX = nombreAmigoX.value.trim(); //.trim -> elimina espacios

    //checkear si está vacío el campo o si el valor ingresado es válido
    if (amigoX === ''){
        alert ("Por favor, inserte un nombre.");
        return;
    } else if (amigos.includes(amigoX)) {
        alert("Ese nombre ya fue ingresado.");
        limpiarCampo();
        return;
    }

    //agregar el elemento al final de la lista y limpiar el campo
    amigos.push(amigoX); 
    console.log("Nombres_ingresados:", amigos);

    limpiarCampo();
    actualizarLista();
    return;    
}

//función para limpiar el campo de ingreso de nombres
function limpiarCampo(){
    document.querySelector('#amigo').value ='';
}


//
