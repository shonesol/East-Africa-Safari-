<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.html");
}
?>

<h1>Welcome to Pearl Dream Safaris Dashboard</h1>
<p>Hello <?php echo $_SESSION['user']; ?></p>
