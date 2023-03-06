<?php
$echo "hello"
// the message
$msg = "Test email";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("margaritagod808@gmail.com","Hello",$msg);
?>
