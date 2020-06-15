<?php

require_once('functions.php');

$page = 'cleaningPage';

$pageContent = include_template('cleaning.php', [
    'page' => $page
]);

$printPage($pageContent, $page);

