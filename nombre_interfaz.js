Document.addEventListener("DOMContentLoaded",function(){

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const pasw = document.getElementById("pasw")
const enviar = document.getElementById("enviar")

    envio.addEventListener("click", function() {
    
    const nombre = nombre.value.trim();    
    if(!nombre) {
        alert("Falta el nombre");
        return;
    }
    
    const correo = correo.value.trim();
    if(!correo) {
        alert("Falta el correo");
        return;
    }
    
    const pasw= pasw.value.trim();
    if(!pasw){
        alert("y la contraseña?")
        return
    }
    })
})
    const ELusuario = {
        name:nombre
        correo:correo
        pasw:pasw
    };
    console.log(Elusuario);

    //Proceso de guardado
    const paraUsuario = JSON.stringify(Elusuario);
    console.log(paraUsuario);
    localStorage.setItem("Elusuario", paraUsuario);
    alert('listo ya puedes "volver" disfruta')

   
