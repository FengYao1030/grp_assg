<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$receiving_email_address = "yourname@yourdomain.com"; // change this

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = trim($_POST["name"]);
    $email   = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format.";
        exit;
    }

    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($receiving_email_address, $subject, $message, $headers)) {
        echo "OK"; // your JS will show the "Your message has been sent" message
    } else {
        http_response_code(500);
        echo "Failed to send email.";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}

