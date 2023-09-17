<?php
if ($_SERVER['REQUEST_METHOD']==='POST'){
    $nombres=$_POST['nombres'];
    $apellidos=$_POST['apellidos'];
    $telefono=$_POST['telefono'];
    $motivo=$_POST['motivo'];
    $email=$_POST['email'];
    $reclamo=$_POST['reclamo'];

    // Indicamos el correo del destinatario
    $destinatario='¨¨@gmail.com';
    // Indicamos el asunto del correo
    $asunto='📢Reclamo de usuario Genius designers🚨';
    // Diseñamos el cuerpo o contenido del mensaje
    $cuerpo="Nombres: " . $nombres . "\n";
    $cuerpo="Apellidos: " . $apellidos . "\n";
    $cuerpo="Telefono: " . $telefono . "\n";
    $cuerpo="Motivo: " . $motivo . "\n";
    $cuerpo .="Email: " . $email . "\n";
    $cuerpo .="Reclamo: " . $reclamo . "\n";
    
    if(mail($destinatario, $asunto, $cuerpo)){
        echo "Su reclamo fue enviado con exito";
    } else{
        echo "Lo siento, inténtelo de nuevo.";
    }
}

?>
