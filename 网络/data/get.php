<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('title'=>'搞事情','date'=>'2014-1-6'),
	array('title'=>'搞事情','date'=>'2014-1-6'),
	array('title'=>'搞事情','date'=>'2014-1-6'),
	array('title'=>'搞事情','date'=>'2014-1-6'),
);
echo json_encode($news);