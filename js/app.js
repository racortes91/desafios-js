const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class StatusCarrito {
   constructor (nombre, precio, cantidad, imagen, id){
      this.nombre = nombre;
      this.precio = precio;
      this.imagen= imagen;
      this.cantidad= 1;
      this.id = id;
   }
}

let contenerdoproductos = document.getElementById("contenedorProducto");

function cardsProductos(arrayProductos) {
   for(let productos of arrayProductos) {
      let div = document.createElement("div");  

      div.className = 'consola__card-ps5';

      div.innerHTML = `<div class="consola__card">
                           <img src=" ${productos.img}" alt="${productos.id}">
                           <h2 class="titulo__producto">${productos.nombre}</h2>
                           <p class="precio__producto">$${productos.precio}</p>
                           <button id="btnAgregar" class="boton__productos">
                              Agregar
                           </button>
                        </div> `

      contenerdoproductos.appendChild(div);
 }
}
cardsProductos(productos);

let botones = document.querySelectorAll(".boton__productos");  

botones.forEach(elemento => {
   elemento.addEventListener("click", agregarCarrito);
})

function agregarCarrito(e) {
  
   let imagen = e.target.parentNode.children[0].src;
   let nombre = e.target.parentNode.children[1].textContent;
   let precio = e.target.parentNode.children[2].textContent;  
   let id = e.target.parentNode.children[0].alt;

   const productoproductos = new StatusCarrito(imagen, nombre, precio, id);
   carrito.push(productoproductos);

   localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargado PopUp - Toastify //
let btnPopUp = document.querySelectorAll('.boton__productos');

btnPopUp.forEach(btn => {
   btn.addEventListener("click", () => {
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


