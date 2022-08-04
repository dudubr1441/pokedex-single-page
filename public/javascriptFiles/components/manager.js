const divScreen = document.querySelector('#screenDiv')
export class managerContent{
    static history = [];
    static nextPage(page){
        this.history.push(page);
        console.log(this.history)
        divScreen.innerHTML = '';
        divScreen.appendChild(page);
    };
    static backPage(){
        if (this.history.length!=1 && this.history.length!=0) {
            
        }else{
            alert('not working');
        };
    };
}
