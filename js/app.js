
// Login usando un objeto como repositorio para futura base de datos.

function login () {

    const persona1 = { name: prompt("Ingrese Usuario"),  pass: prompt("Ingrese Contraseña") }

    console.log("Usuario: " + persona1.name)
    console.log("Contrseña: " + persona1.pass)

    alert("Gracias por unirte, a continuación inicia Sesión")

    let usuario; 
    usuario = prompt("Ingrese usuario");
    while (usuario != persona1.name ) {
       alert("Usuario Incorrecto");
       prompt("Vuelva a intentar");
    }
 
     let clave; 
     clave = prompt("Ingrese clave");
     while (clave != persona1.pass ) {
       alert("clave Incorrecta");
       prompt("Vuelva a intentar");
    }
    
    alert("Bienvenido " + persona1.name);
   
}

    

