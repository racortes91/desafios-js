let tbody = document.querySelector("#tbody");
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.length > 0 && rellenarCarrito(carrito)

//Obtengo los botones y les asigno el evento
let botones = document.querySelectorAll(".boton__productos");

console.log(botones);
botones.forEach(elemento => {
    elemento.addEventListener("click",agregarCarrito);
})

//Acá creo la función de rellenar el carrito

function rellenarCarrito(arrayProductos) {
    tbody.innerHTML = ''
    for (let producto of arrayProductos) {
        let row = document.createElement("tr");


        row.innerHTML = `
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.subtotal}</td>
                        <td>Eliminar</td>
                        `
        tbody.appendChild(row);

    }
}


function agregarCarrito(e) {

    let index = carrito.findIndex(productos => productos.id == e.target.parentNode.children[0].alt);


    let imagen = e.target.parentNode.children[0].src;
    let nombre = e.target.parentNode.children[1].textContent;
    let precio = e.target.parentNode.children[2].textContent;
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
}



