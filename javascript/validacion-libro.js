function validarnom(){
    n=window.event.keyCode;
    if(n>=65 && n<=90 || n>=97 && n<=122){

    }else{
        alert("ERROR! solo se aceptan mayusculas y minusculas");
    }
}

function validarape(){
    n=window.event.keyCode;
    if(n>=65 && n<=90 || n>=97 && n<=122){

    }else{
        alert("ERROR! solo se aceptan mayusculas y minusculas");
    }
}

function validarcorreo(){
    c=window.event.keyCode;
    if(c>=65 && c<=90 || c>=97 && c<=122 || c>=48 && c<=57 || c==64 || c==46){

    }else{
        alert("ERROR! no se aceptan caracteres especiales")
    }
}

function validarnum(){
    //recupera el codigo ASCII de la tecla presionada
    t= window.event.keyCode;
    if(t>=48 && t<=57){

    }else{
        alert("ERROR! solo se aceptan numeros");
    }

}

function validarmotivo(){
    m=window.event.keyCode;
    if(m>=65 && m<=90 || m>=97 && m<=122 || m>=48 && m<=57){

    }else{
        alert("ERROR! no se aceptan caracteres especiales");
    }
}

function validarform(){
    cad= "";
    //"document" es para jalar el nombre de nuestro formulario
    if(document.libro.nombres.value== ""){
        cad= cad + "\nIngrese su nombre";
    }
    if(document.libro.apellidos.value== ""){
        cad= cad + "\nIngrese su apellido";
    }
    if(document.libro.email.value== ""){
        cad= cad + "\nIngrese su correo";
    }
    if(document.libro.telefono.value== ""){
        cad= cad + "\nIngrese su numero de telefono";
    }
    if(document.libro.motivo.value== ""){
        cad= cad + "\nIngrese su motivo";
    }
    if(document.libro.reclamo.value== ""){
        cad= cad + "\nIngrese su reclamo";
    }
    // simbolo "!=" es diferente que
    if(cad != ""){
        alert(cad);
        return false;   
    }
}