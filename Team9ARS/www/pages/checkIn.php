<?php
include_once '../includes/db_connect.php';
include_once '../includes/functions.php';
 
sec_session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        body {background-color: powderblue;text-align: center;line-height: 1.4;}
    </style>
    <meta charset="UTF-8">
    <title>Check-In Portal</title>
    <div style='float: right;'><a href="../index.php">Home</a></div>
</head>
<body>
	<h1>Check-In Portal</h1>
	<form action="../includes/process_checkIn.php" method="post">
		Flight ID<input type="text" name="flightID" value="<?php echo $_POST['number']; ?>"/><br>
		Account Email<input type="text" name="email" value="<?php echo $_POST['email']; ?>"/><br>
		Name<input type="text" name="name" value="<?php echo $_POST['name']; ?>"/><br>
		Number of Baggages<input type="number" name="quantity" min="1" max="5"><br>
		Carry On Baggage?<br>
		Yes<input type="radio" name="carryOn" value="1" checked>
		No<input type="radio" name="carryOn" value="0"><br>
		<input type="submit" value="Submit" /> 
	</form>
</body>
</html>