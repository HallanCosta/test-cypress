// Styles SASS from app
import '@styles';

import { 
    $event, 
    $addClass, 
    $removeClass, 
    $el, 
    $els,
    $hasClass,
    $attr,
    $removeAttr
} from '@app/utils';

import { Home } from '@app/pages/home';

/**
 * Init the code 
 */
DomReady.ready(function()
{
    switch ($$page) {
        case 'home':
            Home();
            break;
        default:
            break;
    }
});
