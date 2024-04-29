<?php
$un=$_POST['yname'];
$em=$_POST['ymail'];
$su=$_POST['phone'];
// $msg=$_POST['mesg'];  
//$phone=$_POST['userphone'];
if(trim($un)!="" && trim($su)!="" && trim($em)!=""){
		if(filter_var($em, FILTER_VALIDATE_EMAIL)){
			//if(preg_match("/^[0-9]*$/", $phone) && strlen($phone)>6) { 
				$message="<p>Имя: ".$un." </p> <p>Email: ".$em." </p> <p> Телефон: ".$su."</p>";
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
				$headers .= 'From:'. $em . "\r\n";

				if(mail('a.egamberdiev@gmail.com','Запрос на обратный звонок с сайта SonoTrade.uz',$message,$headers )){
					echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
					sleep(1);
					header('Location: https://sonotrade.uz/');
					exit( );
				}else{
					echo '2#<p style="color:red;">Please, Try Again.</p>';
				}
			//}
			// else{
				// echo '2#<p style="color:red">Please, provide valid Phone no </p>';
			// }
		}else{
			echo '2#<p style="color:red">Please, provide valid Email.</p>';
		}
}else{
	echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>