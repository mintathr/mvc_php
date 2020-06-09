<?php
	if(!session_id()) session_start(); //jalankan session

	require_once '../app/init.php';

	$app = new App;
	