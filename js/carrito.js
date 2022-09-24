let tbody = document.querySelector("#tbody");
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.length > 0 && rellenarCarrito(carrito)

let botones = document.querySelectorAll(".boton__productos");



botones.forEach(elemento => {
    elemento.addEventListener("click",agregarCarrito);
})

function rellenarCarrito(arrayProductos) {
    tbody.innerHTML = ''
    for (let producto of arrayProductos) {
        let row = document.createElement("tr");

        row.innerHTML = `
                        <td>${producto.nombre}</td>
                        <td><span>$</span> ${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>$ ${producto.subtotal}</td>
                        <td> <button id="${producto.id}" class="btn btn-danger eliminar__productos">Eliminar</button></td>
                        `
        tbody.appendChild(row);
    }
}

// Borrar elementos de carrito, en este caso no sé por que se debe recargar
//la página para borrar bien
let botonEliminar = document.querySelectorAll(".eliminar__productos");

botonEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
} )

function eliminarProducto(e){

    let index = carrito.findIndex(producto => producto.id == e.target.id);

    carrito.splice(index, 1);

    e.target.parentNode.parentNode.remove();

    localStorage.setItem("carrito", JSON.stringify(carrito));

}



// Agregar productos al Carrito

 function agregarCarrito(e) {

    let index = carrito.findIndex(productos => productos.id == e.target.parentNode.children[0].alt);


    let nombre = e.target.parentNode.children[1].textContent;
    let precio = e.target.parentNode.children[2].textContent;
    let imagen = e.target.parentNode.children[0].src;
    let id = e.target.parentNode.children[0].alt;

    if(index == -1){
        const productoproductos = new StatusCarrito(nombre,precio,imagen,1,id);
        carrito.push(productoproductos);
    }else {
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }



    localStorage.setItem("carrito",JSON.stringify(carrito));
    rellenarCarrito(carrito);

    carritoHeader(carrito);
}


// Contador Carrito
function carritoHeader(arrayProductos){

    let contadorCarrito = document.getElementById("contadorCarrito");

    let totalProductos = 0;

    for(let producto of arrayProductos){
        totalProductos += producto.cantidad
    }

    contadorCarrito.innerHTML = "";
    contadorCarrito.innerHTML = `<p>${totalProductos}</p>`
     

}

let total = document.getElementById("precioTotal");

function  actualizarCarrito (){
    contadorCarrito.innerText= carrito.length          
    total.innerText = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
 }                                                             
 


// Contador en local Storage
let contadorCarritoLocal = JSON.parse(localStorage.getItem("carrito"));

   if(contadorCarritoLocal){
      carritoHeader(contadorCarritoLocal);
   }

