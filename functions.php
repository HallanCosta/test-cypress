<?php

//
// Evita acesso direto
//

if ( !defined('CAN_IMPORT') ) {
    echo 'No';
    exit(404);
}

define('ENV', 'dev');

function getVers() {
    return (ENV === 'production' ? '2' : date('Y-m-d_H-i-s'));
}

function get_file_path($file_name) {
    return "/{$file_name}" . ('?' . getVers());
}

function formatDateTime($timestamp, $format)
{
    $timezone = new DateTimeZone(-3);
    return (new DateTime($timestamp))->setTimezone($timezone)->format("{$format}");
}