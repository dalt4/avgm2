<?php

require_once('functions.php');

$page = 'equipmentPage';

$pageContent = include_template('equipment.php', [
    'page' => $page
]);

$printPage($pageContent, $page);
