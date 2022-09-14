carrito = JSON.parse(localStorage.getItem("carrito")) ;

let tbody = document.querySelector("#tbody");

function rellenarCarrito(arrayProductos) {
    
    for(let producto of arrayProductos){

        let row = document.createElement("tr");


        row.innerHTML = `
                        <td>${producto.nombre}</td>
                        <td>$${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>$</td>
                        <td>Eliminar</td>
                        `
        tbody.appendChild(row);

    }
}

rellenarCarrito(carrito);