<?php

require_once('functions.php');

$page = 'mainPage';

$pageContent = include_template('main.php', [
    'page' => $page
]);

$printPage($pageContent, $page);
