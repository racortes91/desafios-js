
const ussers = []
let persona1 = { name: "pepe",  pass: "pepe1234"}
   ussers.push ("persona1");
   
   console.log('Usuario: ', persona1.name);
   console.log('Contraseña: ', persona1.pass);

let btn = document.getElementById('formBtn');
btn.addEventListener('click', () =>{
   
   let loginUsser = document.getElementById('formUsser').value;
   let loginPass = document.getElementById('formPass').value;
  
   if (loginUsser == persona1.name && loginPass == persona1.pass)
      { 
      window.location.href="https://racortes91.github.io/proyecto-final/";
      }
      else
      {
      document.getElementById('usserTxt').innerHTML="Usuario Incorrecto"  
      document.getElementById('passTxt').innerHTML="Contraseña Incorrecta"
      }
});

   
   
