import {managerContent} from '/javascriptFiles/components/manager.js';
import {homeStart as home} from '/javascriptFiles/screens/home.js';
import { pokedex } from '/javascriptFiles/screens/pokedex.js';
function urlIdentifier(){
    const url = window.location.pathname.toString();
    const Adresses = url.split('/');
    Adresses.shift();
    return Adresses;
}
switch (urlIdentifier()[0]) {
    case '':
    managerContent.nextPage(home)    
        break;
    case 'home':
    managerContent.nextPage(home)
        break;
    case 'pokedex':
        console.log('teste');
    managerContent.nextPage(pokedex);
        break;
    default:
    alert('erro ao carregar')
        break;
}
