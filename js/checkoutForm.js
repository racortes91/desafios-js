// Form de Compra

let nombre = document.getElementById('fname').value;
let email = document.getElementById('fmail').value;
let telefono = document.getElementById('fphone').value;
let direccion = document.getElementById('fdirection').value;
let ciudad = document.getElementById('fciudad').value;
let compraExitosa = document.getElementById("mensajeCompra");
    
   

document.getElementById("formBtnCompra").addEventListener("click", function(e){
     e.preventDefault()

     alert("Hola " + fname.value + " tu paquete será despachado a " + fdirection.value + "dentro de 3 días");
    let div = document.createElement("div");

    div.className = 'modal-body';

    div.innerHTML = `<div
                        <p> Hola ${fname.value} tu compra será despachada a ${fdirection.value}
                        dentro de tres días.</p>
                        <button> <a href="../index.html">Volver al Inicio</a></button>
                    </div> `
                    
        

})

