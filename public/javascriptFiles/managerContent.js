import {managerContent as manager} from '/javascriptFiles/components/manager.js';
import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import { screens } from '/javascriptFiles/screens/screens.js';
window.history.back = manager.backPage; 
function urlIdentifier(){
    const url = window.location.pathname.toString();
    const Adresses = url.split('/');
    Adresses.shift();
    return Adresses;
}
switch (urlIdentifier()[0]) {
    case '':
        manager.nextPage(screens.home);   
        break;
    case 'home':
        manager.nextPage(screens.home);
        break;
    case 'pokedex':
        manager.nextPage(screens.pokedex);
        ajax(screens.pokedex.config);
        break;
    default:
    alert('erro ao carregar')
        break;
} 
