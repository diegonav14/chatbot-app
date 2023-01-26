<?php

include('database.php');

if(isset($_POST['value'])){

    $getMessage = $_POST['value'];
    $query = "SELECT replies FROM chatbot WHERE queries LIKE '%$getMessage%' ";

    $result = mysqli_query($connection, $query); 

    if(!$result){ //Validar Error
        die('Query Failed' . mysqli_error($connection));
    }

    if(mysqli_num_rows($result) > 0){
        $fetch_message = mysqli_fetch_assoc($result);
        echo $fetch_message['replies'];
    }
    else{
        echo "!Lo siento, no puedo ayudarte con este inconveniente, por favor contactate con el administrador.";
    }

}
?>