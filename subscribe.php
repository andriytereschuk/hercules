<?php

$name = $_POST['sName'];
$company = $_POST['sCompany'];
$email = $_POST['sEmail'];

require_once 'vendor/autoload.php';
use MailerLite\Subscribers;

$ML_Subscribers = new Subscribers("3a60451343a72c6d4c997c294d1b00a4");

$subscriber = array(
    'email' => $email,
    'name' => $name,
    'fields' => array(
        array('company' => 'company', 'value' => $company)
    )
);

$result = $ML_Subscribers->setId(1916381)->add($subscriber);
?>