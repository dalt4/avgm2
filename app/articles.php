<?php

require_once('functions.php');

$page = 'articlesPage';

$pageContent = include_template('articles.php', [
    'page' => $page
]);

$printPage($pageContent, $page);