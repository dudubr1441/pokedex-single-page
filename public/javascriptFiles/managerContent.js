import {managerContent as manager} from '/javascriptFiles/components/manager.js';
import {screens} from '/javascriptFiles/screens/screens.js';
import {homeStart as home} from "/javascriptFiles/screens/home.js";
window.history.back = manager.backPage; 
var contador = 0;
export function verifyUrl() {
    function urlIdentifier(){
        const url = window.location.pathname.toString();
        const Adresses = url.split('/');
        Adresses.shift();
        return Adresses;
    }
    switch (urlIdentifier()[0]) {
        case '':
            manager.nextPage(home);   
            break;
        case 'home':
            manager.nextPage(home);
            break;
        case 'pokedex':
            manager.nextPage(screens.pokedex);
            break;
        default:
        alert('error load page')
            break;
    }  
}
document.addEventListener("DOMContentLoaded", function(event) {
    verifyUrl();
});