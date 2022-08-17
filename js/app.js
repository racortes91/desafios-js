
// Login usando un objeto como repositorio para futura base de datos.


const ussers = []
let persona1 = { name: "pepe",  pass: "pepe1234"}
   ussers.push ("persona1");
   
   console.log('Usuario: ', persona1.name);
   console.log('Contraseña: ', persona1.pass);



function accederLogin () {

   let loginUsser = document.getElementById('formUsser').value;
   let loginPass = document.getElementById('formPass').value;
   

   let btnSubmit = document.getElementById('formBtn');
   btnSubmit.addEventListener('click', () =>{
      while(loginUsser != persona1.name) {
         let usserIncorrecto = document.getElementById('usserTxt');
         usserIncorrecto = document.createElement('p');
         let txtUsser =createTextNode('Usuario Incorrecto');
      }
      while(loginUsser != persona1.pass) {
         let passIncorrecto = document.getElementById('passTxt');
         passIncorrecto = document.createElement('p');
         let txtPass =createTextNode('Contraseña Incorrecta')
      }

      formBtn.window.location.href="https://racortes91.github.io/proyecto-final/"

   } )
   
} 



// function login () {

//     const persona1 = { name: prompt("Ingrese Usuario"),  pass: prompt("Ingrese Contraseña") }
//     ussers.push(persona1)

//     console.log("Usuario: " + persona1.name)
//     console.log("Contrseña: " + persona1.pass)

//     alert("Gracias por unirte, a continuación inicia Sesión")

//     let usuario; 
//     usuario = prompt("Ingrese usuario");
//     while (usuario != persona1.name ) {
//        alert("Usuario Incorrecto");
//        usuario = prompt("Vuelva a intentar");
//     }
 
//      let clave; 
//      clave = prompt("Ingrese clave");
//      while (clave != persona1.pass ) {
//        alert("clave Incorrecta");
//        clave = prompt("Vuelva a intentar");
//     }
    
//     alert("Bienvenido " + persona1.name);
   
// }

    

