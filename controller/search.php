<?php 
require_once('models/Search.php');
require_once('models/View.php');


$view = new View();
$model = new Search();
$model->searchDB();

$view->show('header');
$view->show('search');
$view->show('footer');


