const carrito = JSON.parse(localStorage.getItem("carrito")) || [ ];

class StatusCarrito {
   constructor (nombre, precio, imagen, id){
      this.nombre = nombre;
      this.precio = precio;
      this.imagen= imagen;
      this.id = id;
   }
}

let contenerdoConsolas = document.getElementById("contenedorProducto");

function cardsProductos(arrayConsolas) {
   for(let consolas of arrayConsolas) {
      let div = document.createElement("div");  

      div.className = 'consola__card-ps5';

      div.innerHTML = `<div class="consola__card">
                           <img src=" ${consolas.img}" alt="${consolas.id}">
                           <h2 class="titulo__producto">${consolas.nombre}</h2>
                           <p class="precio__producto">$${consolas.precio}</p>
                           <button id="btnAgregar" class="boton__productos">
                              Agregar
                           </button>
                        </div> `

      contenerdoConsolas.appendChild(div);
 }
}
cardsProductos(consolas);

let botones = document.querySelectorAll(".boton__productos");  

botones.forEach(elemento => {
   elemento.addEventListener("click", agregarCarrito);
})

function agregarCarrito(e) {

//   let carritoLocal = JSON.parse(localStorage.getItem("carrito"))

//    if (carritoLocal) {
//       carrito = carritoLocal;
//    }

   let imagen = e.target.parentNode.children[0].src;
   let nombre = e.target.parentNode.children[1].textContent;
   let precio = e.target.parentNode.children[2].textContent;  
   let id = e.target.parentNode.children[0].alt;

   const productoConsolas = new StatusCarrito(imagen, nombre, precio, id);
   carrito.push(productoConsolas);

   localStorage.setItem("carrito", JSON.stringify(carrito));
}
