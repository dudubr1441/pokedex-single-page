import {managerContent as manager} from '/javascriptFiles/components/manager.js';
import { screens } from '/javascriptFiles/screens/screens.js';
function urlIdentifier(){
    const url = window.location.pathname.toString();
    const Adresses = url.split('/');
    Adresses.shift();
    return Adresses;
}
switch (urlIdentifier()[0]) {
    case '':
        manager.nextPage(screens.home)    
        break;
    case 'home':
        manager.nextPage(screens.home)
        break;
    case 'pokedex':
        manager.nextPage(screens.pokedex);
        break;
    default:
    alert('erro ao carregar')
        break;
} 
console.log(manager.GetLastPage())