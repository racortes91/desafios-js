let tbody = document.querySelector("#tbody");
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.length > 0 && rellenarCarrito(carrito)

let botones = document.querySelectorAll(".boton__productos");



console.log(botones);
botones.forEach(elemento => {
    elemento.addEventListener("click",agregarCarrito);
})

function rellenarCarrito(arrayProductos) {
    tbody.innerHTML = ''
    for (let producto of arrayProductos) {
        let row = document.createElement("tr");

        row.innerHTML = `
                        <td>${producto.nombre}</td>
                        <td>${producto.imagen}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>$ ${producto.subtotal}</td>
                        <td> <button id="${producto.id}" class="btn btn-danger eliminar__productos">Eliminar</button></td>
                        `
        tbody.appendChild(row);
    }
}

// Borrar elementos de carrito
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
 console.log(productos);

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

// Contador en local Storage
let contadorCarritoLocal = JSON.parse(localStorage.getItem("carrito"));

   if(contadorCarritoLocal){
      carritoHeader(contadorCarritoLocal);
   }


//Buscador
buscador.addEventListener('input',()=>{
    mostrarProductos(stockProductos.filter(item=> item.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
})