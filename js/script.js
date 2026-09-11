"use strict";

const formulario=document.getElementById("form-contacto");
const campoNombre=document.getElementById("nombre");
const campoEmail=document.getElementById("email");
const campoMensaje=document.getElementById("mensaje");

function mostrarError(campo, texto){
    campo.classList.add("invalido");
    document.getElementById("error-"+campo.id).textContent=texto;
}

function limpiarError(campo){
    campo.classList.remove("invalido");
    document.getElementById("error-"+campo.id).textContent="";
}

formulario.addEventListener("submit", function(event){
    const nombre=campoNombre.value.trim();
    const email=campoEmail.value.trim();
    const mensaje=campoMensaje.value.trim();
    
    let valido=true;

    if(nombre===""){
        mostrarError(campoNombre, "Por favor ingresa tu nombre.");
        valido=false;
    } else if (nombre.length < 3){
        mostrarError(campoNombre, "El nombre debe tener al menos 3 caracteres.");
        valido=false;
    } else {
        limpiarError(campoNombre);
    }

    const patronEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email===""){
        mostrarError(campoEmail, "Por favor ingresa tu correo electrónico.");
        valido=false;
    } else if (!patronEmail.test(email)){
        mostrarError(campoEmail, "Por favor ingresa un correo electrónico válido. Ejemplo: usuario@gmail.com");
        valido=false;
    } else {
        limpiarError(campoEmail);
    }
    if(mensaje===""){
        mostrarError(campoMensaje, "Por favor ingresa tu mensaje.");
        valido=false;
    } else if (mensaje.length < 10){
        mostrarError(campoMensaje, "El mensaje debe tener al menos 10 caracteres.");
        valido=false;
    } else {
        limpiarError(campoMensaje);
    }
    if (!valido){
        event.preventDefault();
    }
});