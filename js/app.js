let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class StatusCarrito {
   constructor(nombre,precio,cantidad,imagen,id,subtotal) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.cantidad = 1;
      this.id = id;
      this.subtotal = precio;
   }
}

let contenerdoproductos = document.getElementById("contenedorProducto");

function cardsProductos(arrayProductos) {
   for (let productos of arrayProductos) {
      let div = document.createElement("div");

      div.className = 'consola__card-ps5';

      div.innerHTML = `<div class="consola__card">
                           <img src=" ${productos.img}" alt="${productos.id}">
                           <h2 class="titulo__producto">${productos.nombre}</h2>
                           <p class="precio__producto">${productos.precio}</p>
                           <button id="btnAgregar" class="boton__productos">
                              Agregar
                           </button>
                        </div> `

      contenerdoproductos.appendChild(div);
   }
}


cardsProductos(productos);

//Buscador
const buscador = document.getElementById("search")

buscador.addEventListener("input",() => {
   cardsProductos(productos.filter(productos => productos.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
})



// Cargado PopUp - Toastify
let btnPopUp = document.querySelectorAll(".boton__productos");

btnPopUp.forEach(btn => {
   btn.addEventListener("click",() => {
      Toastify({
         text: "Producto agregado al carrito 👍 🛒",
         style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            color: "white",
            padding: "10px",

         }
      }).showToast();
   })
})

