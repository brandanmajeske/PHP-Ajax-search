<?php

class View {
	
	public function show($template, $data = array(), $data2 = array()) {
		$templatePath = "views/${template}.inc";
		if (file_exists($templatePath)){
			
			$pageTitle = '';
			$subHeading = '';

			include $templatePath;
		}
	}


}