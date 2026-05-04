<?php
session_start();
include "db.php";

$email = $_POST['email'];
$password = $_POST['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user'] = $user['name'];
    header("Location: ../dashboard.php");
} else {
    echo "Invalid login";
}
?>
