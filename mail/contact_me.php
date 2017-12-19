<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'nic@nicwest.ca'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Message from Nicwest.ca";
$email_body = "Name: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: $email_address"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
mail($to,$email_subject,$email_body,$headers);
return true;			
?>