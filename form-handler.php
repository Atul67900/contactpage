<?php

if(isset($_POST['sub']))
{
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$msg="Name: ". $name . "<br>" . "Email Id: ". $email . "<br>" . "subject: ". $subject . "<br>" .
 "Message: ". $message;

$to = "atulsharma67900@gmail.com";
$subject = "Inquiry from Decorativehut Website";
$sender = "$email";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "from: " . $sender."\n";
if(mail($to, $subject, $msg, $headers))
{
header('Location: http://atulportfolio.000webhostapp.com/');
exit;
}
else
{
echo "Error !!";
}
}

?>