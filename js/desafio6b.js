
// Formulario pagina contactos

let formulario = document.getElementById ("formulario");

let boton_enviar = document.getElementById ("boton_enviar");

formulario.addEventListener("submit" , function(e){

    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");

    console.log("El usuario es:", nombre.value);
    console.log("La email es:" , email.value);
    console.log("El telefono es:" , telefono.value);
    console.log("El mensaje es:" , mensaje.value);

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = ""
    
}) 
