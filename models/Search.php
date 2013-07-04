<?php

require_once('inc/db.php');

class Search {
	private $db;

	public function __construct(){
		$this->db = new PDO(MY_DSN, MY_USER, MY_PASS);
		$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	} // end __construct

	public function searchDB(){

		$statement = $this->db->prepare("

				SELECT * FROM `locations`;
				
			");
		try {
			if($statement->execute()){
				$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
				$fp = fopen('tmp/results.json', 'w');
				fwrite($fp, json_encode($rows));
				fclose($fp);
			}
		}
		catch(PDOException $e) {
			echo 'Error: '.$e->getMessage();

		}

	} // end searchDB

} //end Search


