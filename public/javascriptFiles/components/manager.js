const divScreen = document.querySelector('#screenDiv')
export class managerContent{
    static page = 1;
    static history = [];
    static nextPage(page){
        this.history.push(page);
        divScreen.innerHTML = '';
        divScreen.appendChild(page.tag);
        window.history.pushState({page:this.page},page.name,page.url)
    };
    static backPage(){
        if (this.history.length!=1 && this.history.length!=0) {
            this.history.shift();
            divScreen.appendChild(this.history[this.history.length-1])
        }else{
            alert('not working');
        };
    };
    static GetLastPage(){
        return {page:++this.page,history:this.history[this.history.length-1]};
    }
}
