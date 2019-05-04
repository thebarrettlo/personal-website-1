<?php

if($_POST) {
    $visitorName = "";
    $contactEmail = "";
    $messageSubject = "";
    $visitorMessage = "";
    $recipient = "thebarrettlo@gmail.com";
    
    if(isset($_POST['visitorName'])) {
        $visitorName = filter_var($_POST['visitorName'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['contactEmail'])) {
        $contactEmail = str_replace(array("\r", "\n", "%0a", "%0d"), "", $_POST['contactEmail']);
        $contactEmail = filter_var($contactEmail, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['messageSubject'])) {
        $messageSubject = filter_var($_POST['messageSubject'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['visitorMessage'])) {
        $visitorMessage = filter_var($_POST['visitorMessage'], FILTER_SANITIZE_STRING);
    }

    $headers = "From: $contactEmail";

    if(mail($recipient, $messageSubject, $visitorMessage, $headers)) {
        echo "<p>Your message has been sent. You will receive a copy of your message and a reply soon!</p>";
    }
}
else {
    echo "<p>Sorry, something isn't right...</p>";
}

?>