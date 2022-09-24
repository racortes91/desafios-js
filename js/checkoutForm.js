// Form de Compra

let nombre = document.getElementById('fname').value;
let email = document.getElementById('fmail').value;
let telefono = document.getElementById('fphone').value;
let direccion = document.getElementById('fdirection').value;
let ciudad = document.getElementById('fciudad').value;



document.getElementById("formBtnCompra").addEventListener("click", function(e){
     e.preventDefault()

     alert("Hola " + fname.value + " tu paquete será despachado a " + fdirection.value + "dentro de 3 días");
 }); 
