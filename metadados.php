<?php

//
// Evita acesso direto
//

if ( !defined('CAN_IMPORT') ) {
    echo 'No';
    exit(404);
}

//
// ?
//

$metadata['titulo'] = 'New Site';
$metadata['descricao'] = 'Description your site';

// $vers = getVers();

// $sitename = trim( esc_html( get_bloginfo("name") ) );
// $pagetitle = trim( esc_html( wp_title('', false) ) );
// $metadata['titulo'] = !is_front_page() ? $pagetitle . " | {$sitename}" : $sitename;
// $metadata['descricao'] = trim( esc_html( get_bloginfo('description') ) );
// $metadata['og:url'] = home_url($wp->request);

//
// Facebook
//

// $metadata['og:image'] = getBase('facebook.png', 2);
// $metadata['og:image:width'] = 500;
// $metadata['og:image:height'] = 500;
// $metadata['og:image:alt'] = $metadata['titulo'];

//
// Twitter
//

// $metadata['twitter:site'] = '@intersolid';

?>

        <!-- TITLE -->
        <title><?php echo $metadata['titulo']; ?></title>

        <!-- DESCRITPION -->
        <meta name="description" content="<?php echo $metadata['descricao']; ?>"/>

        <!-- <meta name="facebook-domain-verification" content="0jua3ty6r2mxfx30cu1qtwhalhcp3g" /> -->

        <!-- META DATA -->
        <!-- <link rel="apple-touch-icon" sizes="180x180" href="<?php /* echo getBase('apple-touch-icon.png'); */ ?>">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php /* echo getBase('favicon-32x32.png'); */ ?>">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php /* echo getBase('favicon-16x16.png'); */ ?>">
        <link rel="manifest" href="<?php /* echo getBase('site.webmanifest'); */ ?>">
        <link rel="mask-icon" href="<?php /* echo getBase('safari-pinned-tab.svg" color="#5bbad5'); */ ?>">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="theme-color" content="#ffffff"> -->

        <!-- META DADOS FACEBOOK -->
        <!-- <meta property="fb:app_id" content="499686294964234" />
        <meta property="og:url" content="<?php /* echo $metadata['og:url']; */ ?>/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="<?php /* echo $metadata['titulo']; */ ?>"/>
        <meta property="og:description" content="<?php /* echo $metadata['descricao']; */ ?>"/>
        <meta property="og:image" content="<?php /* echo $metadata['og:image']; */ ?>"/>
        <meta property="og:image:alt" content="<?php /* echo $metadata['og:image:alt']; */ ?>"/>
        <meta property="og:image:width" content="<?php /* echo $metadata['og:image:width']; */ ?>"/>
        <meta property="og:image:height" content="<?php /* echo $metadata['og:image:height']; */ ?>"/> -->

        <!-- META DADOS TWITTER -->
        <!-- <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="<?php /* echo $metadata['titulo']; */ ?>"/>
        <meta name="twitter:description" content="<?php /* echo $metadata['descricao']; */ ?>"/>
        <meta name="twitter:image" content="<?php /* echo $metadata['og:image']; */ ?>"/>
        <meta name="twitter:site" content="<?php /* echo $metadata['twitter:site']; */ ?>"/> -->
