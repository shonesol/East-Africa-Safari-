<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.html");
}
include "backend/db.php";

$result = $conn->query("SELECT * FROM bookings");
?>

<h2>All Bookings - Pearl Dream Safaris</h2>

<table border="1">
<tr>
<th>Name</th>
<th>Email</th>
<th>Tour</th>
<th>Message</th>
</tr>

<?php while($row = $result->fetch_assoc()): ?>
<tr>
<td><?= $row['name'] ?></td>
<td><?= $row['email'] ?></td>
<td><?= $row['tour'] ?></td>
<td><?= $row['message'] ?></td>
</tr>
<?php endwhile; ?>

</table>
