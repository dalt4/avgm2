<?php

require_once('functions.php');

$page = 'contactsPage';

$pageContent = include_template('contacts.php', [
    'page' => $page
]);

$printPage($pageContent, $page);