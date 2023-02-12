<?php

// global $wp;

//
// Evita acesso direto
//

if ( !defined('CAN_IMPORT') ) {
    echo 'No';
    exit(404);
}

require_once('functions.php');

// $url = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER["REQUEST_URI"];
// homePageView($url);

?><!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <?php require_once('metadados.php'); ?>

        <!-- META DADOS GOOGLE -->
        <!-- <meta name="google-site-verification" content="Vv-iZoKlLPtIWuofqHyVEbQ8fAhyyyeoZmWjHs_ttlQ" /> -->

        <!-- FONT & PRE CACHING -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <!-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> -->

        <!-- STYLE.CSS -->
        <link href="<?php echo get_file_path('style.css'); ?>" rel="stylesheet">

        <!-- TERCEIROS -->
        <?php require_once('terceiros.php'); ?>
    </head>

    <body class="body">

        <!-- Google Tag Manager (noscript) -->
        <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NM55BQ6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
        <!-- End Google Tag Manager (noscript) -->

        <!-- <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Intersolid",
                "url": "https://intersolid.com.br/",
                "address": "https://intersolid.com.br/",
                "sameAs": [
                    "https://www.facebook.com/IntersolidSoftware",
                    "https://www.instagram.com/intersolidsoftware/",
                    "https://br.linkedin.com/company/intersolidsoftware"
                ]
            }
        </script> -->
