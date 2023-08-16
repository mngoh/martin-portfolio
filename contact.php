<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["_subject"];
    $message = $_POST["message"];
    
    $to = "ngohlmartin@gmail.com"; // Replace with your email address
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    header("Location: ../pagesthankyou.html"); // Redirect to thank you page
}
?>
