function validacion(){
    var nombre      = document.getElementById("nombre").value;
    var apellidoP   = document.getElementById("apellidoP").value;
    var apellidoM   = document.getElementById("apellidoM").value;
    var edad        = parseInt (document.getElementById("edad").value);
    var sexo        = document.getElementById("sexo").value;
    var email       = document.getElementById("email").value;
    var colorF      = document.getElementById("colorF").value;
    var animalF     = document.getElementById("animalF").value;
    var contraseña1 = document.getElementById("password1").value;
    var contraseña2 = document.getElementById("password2").value;    
    
    if (nombre == "" || apellidoP == "" || apellidoM =="" || 
        edad == 0 || sexo =="" || email =="" || colorF =="" || animalF =="" || 
        contraseña1 =="" || contraseña2 =="")
        {
        alert("Existen Campos Vacios. Por favor Verifique");
        return false;
        
    } 
    else{
        if(contraseña1!==contraseña2){
            alert("Las Contraseñas No Coinciden");
            return false;
        }
        else{
            alert("Registro Realizado Con Exito!");
            return true;
        }
    }
        

}
