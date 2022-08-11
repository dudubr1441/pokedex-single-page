import {managerContent as manager} from '/javascriptFiles/components/manager.js';
import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import {screens} from '/javascriptFiles/screens/screens.js';
window.history.back = manager.backPage; 
var contador = 0;
function verifyUrl() {
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
            console.log(contador+1);
            manager.nextPage(screens.home);
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