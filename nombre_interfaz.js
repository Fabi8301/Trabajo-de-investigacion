
const nombre = document.getElementById("name")
const imail = document.getElementById("email")
const pass = document.getElementById("pass")
const envio = document.getElementById("enviar")

envio.addEventListener("click", function() {

    
    const name = nombre.value.trim();
    
    if(!name) {
        alert("Falta el nombre");
        return;
        //localStorage.setItem("nombre", JSON.stringify("nombre.html"))
       
    }
    
    const imail = email.value.trim();
    if(!imail) {
        alert("Falta apellidos");
        return;
    }
    const pass= pass.value.trim();
    if(!pass){
        alert("y la contraseña?")
        return
    }
   // alert('listo ya puedes "volver" disfruta')
   const usuariodatos= {
    nombre:name,
    imail:imail,
    pass:pass

   }
   console.log(usuariodatos);

   const UsuarioJson = JSON.stringify(usuariodatos);
    console.log(UsuarioJson);
    localStorage.setItem("usuariodatos", UsuarioJson);

})