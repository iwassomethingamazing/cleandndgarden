<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize inputs
    $name = htmlspecialchars($_POST['gname']);
    $email = htmlspecialchars($_POST['gmail']);
    $phone = htmlspecialchars($_POST['cname']);
    $service = htmlspecialchars($_POST['cage']);
    $message_content = htmlspecialchars($_POST['message']);

    // Set recipient email address
    $to = 'recipient@example.com'; // Replace with your email address

    // Set email subject
    $subject = 'New Quote Request';

    // Create the HTML message
    $email_message = "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            .form-data {
                margin-bottom: 20px;
            }
            .form-data label {
                font-weight: bold;
                margin-bottom: 5px;
                display: block;
            }
            .form-data p {
                margin: 0;
                padding: 10px;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1>New Contact Request</h1>
            <div class='form-data'>
                <label>Nome:</label>
                <p>$name</p>
            </div>
            <div class='form-data'>
                <label>Email:</label>
                <p>$email</p>
            </div>
            <div class='form-data'>
                <label>Numero di Telefono:</label>
                <p>$phone</p>
            </div>
            <div class='form-data'>
                <label>Tipo di Servizio:</label>
                <p>$service</p>
            </div>
            <div class='form-data'>
                <label>Messaggio:</label>
                <p>$message_content</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Set the email headers to support HTML content
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: ' . $email . "\r\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo 'Quote sent successfully.';
    } else {
        echo 'Failed to send the quote.';
    }
} else {
    echo 'Invalid request.';
}
?>
