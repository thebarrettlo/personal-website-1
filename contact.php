<?php

if($_POST) {
    $visitorName = "";
    $contactEmail = "";
    $messageSubject = "";
    $visitorMessage = "";
    $copyMessage = "";
    $recipient = "barrett@thebarrettlo.com";
    
    if(isset($_POST['visitorName'])) {
        $visitorName = filter_var($_POST['visitorName'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['contactEmail'])) {
        $contactEmail = str_replace(array("\r", "\n", "%0a", "%0d"), "", $_POST['contactEmail']);
        $contactEmail = filter_var($contactEmail, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['messageSubject'])) {
        $messageSubject = $_POST['messageSubject'];
    }

    if(isset($_POST['visitorMessage'])) {
        $visitorMessage = htmlspecialchars($_POST['visitorMessage']);
        $copyMessage = "<html>" . nl2br("Hi!\r\n\nThis message is to confirm your message sent to Barrett Lo on www.thebarrettlo.com.
        You'll find a copy of your message below. Please allow a couple days for a reply. Thanks!\r\n\n----------Begin Message----------\r\nSent on "
        . date("l, m/d/Y") . " at " . date("h:i:sa") . ".\r\n\n$visitorMessage\r\n\n-----------End Message-----------") . "</html>";
    }

    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/html; charset=utf-8\r\n" .
    "X-Priority: 4\r\n" . "Reply-To: $visitorName <$contactEmail>\r\n" . "From: $visitorName <$contactEmail>\r\n";

    $headersReceipt = "MIME-Version: 1.0\r\n" . "Content-type: text/html; charset=utf-8\r\n" .
    "X-Priority: 5\r\n" . "Reply-To: Barrett Lo <$recipient>\r\n" . "From: Barrett Lo <$recipient>\r\n";

    $envelopeFrom = "-f barrett@thebarrettlo.com";

    if(mail($recipient, $messageSubject, $visitorMessage, $headers) and
    mail($contactEmail, "Message sent: $messageSubject", $copyMessage, $headersReceipt, $envelopeFrom)) {
        echo "<script type='text/javascript'>
             alert('Your message has been sent. You will receive a copy of your message and a reply soon! You may need to check your spam folder.');
             window.location.replace('https://www.thebarrettlo.com/contact.html');
             </script>";
        exit;
    }
    else {
        echo "<script type='text/javascript'>
             alert('Sorry, something went wrong. Please try again later!');
             window.location.replace('https://www.thebarrettlo.com/contact.html');
             </script>";
        exit;
    }
}
else {
    echo "<p>Sorry, something isn't right...</p>";
}

?>