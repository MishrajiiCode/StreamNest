<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Recipient's email address (where feedback will be sent)
    $to = "akhileshchandramishra0@gmail.com";
    $subject = "New Feedback from $name";

    // Email message body
    $email_message = "
    Name: $name\n
    Email: $email\n
    Feedback/Suggestion:\n
    $message
    ";

    // Headers for the email
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Success - Send thank you message to the user
        echo "<script>alert('Thank you for your feedback. We will work on your feedback. Have a great day!'); window.location.href = 'index.html';</script>";
    } else {
        // Failure - Notify user
        echo "<script>alert('Oops! Something went wrong. Please try again later.'); window.location.href = 'index.html';</script>";
    }
}
?>
