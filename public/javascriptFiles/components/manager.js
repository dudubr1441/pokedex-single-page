import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import {verifyUrl} from '/javascriptFiles/managerContent.js';
import { homeStart as home} from "/javascriptFiles/screens/home.js";
const divScreen = document.querySelector('#screenDiv')
export class managerContent{
    static page = 0;
    static history = [];
    static nextPage(page){
        this.history.push(page);
        divScreen.innerHTML = '';
        divScreen.appendChild(page.tag);
        // if (this.page==1) {
        //     window.history.replaceState({page:++this.page},page.name,page.url)
        // }
        if (page.config) {
            ajax(page.config);
        }
        window.history.pushState({page:++this.page},page.name,page.url);
        this.page++;
    };
    static backPage(){
        if (this.history[this.page+1]) {
            this.history.pop();
            divScreen.innerHTML = "";
            console.log(this.history[this.history.length-1]);
            divScreen.appendChild(this.history[this.history.length-1].tag);
            window.history.pushState({page:++this.page},this.history[this.history.length-1].name,this.history[this.history.length-1].url)
        }else{
            divScreen.innerHTML = '';
            divScreen.appendChild(home.tag);
            window.history.pushState({page:++this.page},home.name,home.url);
        };
    };
    static GetLastPage(){
        return {page:++this.page,history:this.history[this.history.length-1]};
    }
}
