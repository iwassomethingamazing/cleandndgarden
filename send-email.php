<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = htmlspecialchars($_POST['gname']);
    $email = htmlspecialchars($_POST['gmail']);
    $phone = htmlspecialchars($_POST['cname']);
    $age = htmlspecialchars($_POST['cage']);
    $message = htmlspecialchars($_POST['message']);

    // Set recipient email address
    $to = 'recipient@example.com'; // Replace with your email address

    // Set email subject
    $subject = 'New Quote Request';

    // Create email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Age: $age\n";
    $email_message .= "Message:\n$message\n";

    // Set email headers
    $headers = "From: $email";

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