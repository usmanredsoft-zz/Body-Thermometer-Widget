<?php
$questions = array();

// The file test.xml contains an XML document with a root element
// and at least an element /[root]/title.
function array_random($arr, $num = 1) {
    shuffle($arr);
   
    $r = array();
    for ($i = 0; $i < $num; $i++) {
        $r[] = $arr[$i];
    }
    return $num == 1 ? $r[0] : $r;
}

if (file_exists('questions.xml')) {
    $xml = simplexml_load_file('questions.xml');
 	$rows = array();
 	if($xml->children()) {
 		foreach ($xml->children() as $row) {
 			$rows[] = array(
 				'title' => (string)$row->title,
 				'answer' => (string)$row->answer,
 			);
 		}
 	}
 	if(!empty($rows)) {
 		$questions = array_random($rows, 5);
 	}
}
$questions = json_encode($questions);