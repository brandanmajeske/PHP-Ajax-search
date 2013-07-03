<?php 

require_once('models/View.php');


$view = new View();


$view->show('header');
$view->show('search');
$view->show('footer');


