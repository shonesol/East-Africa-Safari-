<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$tour = $_POST['tour'];
$message = $_POST['message'];

$sql = "INSERT INTO bookings (name, email, tour, message)
        VALUES ('$name','$email','$tour','$message')";

if ($conn->query($sql)) {
    echo "Booking sent!";
} else {
    echo "Error";
}
?>
