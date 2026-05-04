<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$tour = $_POST['tour'];
$message = $_POST['message'];

// Save to database
$sql = "INSERT INTO bookings (name, email, tour, message)
        VALUES ('$name','$email','$tour','$message')";
$conn->query($sql);

// SEND EMAIL
$to = "shonesol28@gmail.com"; // your email
$subject = "New Safari Booking - Pearl Dream Safaris";

$body = "
New booking received:

Name: $name
Email: $email
Tour: $tour
Message: $message
";

$headers = "From: noreply@pearldreamsafaris.com";

mail($to, $subject, $body, $headers);

echo "Booking sent successfully!";
?>
