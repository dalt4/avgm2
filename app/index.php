<?php

require_once('functions.php');

$pageContent = include_template('main.php', [
    'page' => $page
]);

$printPage($pageContent, $page);