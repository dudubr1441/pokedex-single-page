const divScreen = document.querySelector('#screenDiv')
const functionBackOrigin = window.history.back;
export class managerContent{
    static page = 1;
    static history = [];
    static nextPage(page){
        this.history.push(page);
        divScreen.innerHTML = '';
        divScreen.appendChild(page.tag);
        if (this.page==1) {
            window.history.replaceState({page:++this.page},page.name,page.url)
        }
        window.history.pushState({page:++this.page},page.name,page.url)
    };
    static backPage(){
        console.log(managerContent.page);
        if (page !==1 || page!==0) {
            this.history.shift();
            console.log('oi'); 
            divScreen.appendChild(this.history[this.history.length-1])
        }else{
            functionBackOrigin();
        };
    };
    static GetLastPage(){
        return {page:++this.page,history:this.history[this.history.length-1]};
    }
}
