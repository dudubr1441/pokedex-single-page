export class Component{
    constructor(elementHTML = 'div'){
        this.elementHTML = document.createElement(elementHTML);   
    }
    get Element(){
        return this.elementHTML;
    }
    AddClass(nameClass = ''){
        this.elementHTML.classList.add(nameClass);
    };
    AddAtributte(name,value){
        this.elementHTML.setAttribute(name,value);
    };
    SetText(value){
        this.elementHTML.innerText = value.toString();
    }
    appendChild(elements){
        this.elementHTML.appendChild(elements);
    }
    removeAllChildren(){
        for (child of this.elementHTML.children){
            child.remove();
        }
    }
    addEvent(type,callback){
        this.elementHTML.addEventListener(type,callback);
    }
    static createDiv(id) {
        const div = new Component();
        if (id) {
            div.AddAtributte('id',id.toString())
        }
        return div;
    }
    static createLink(link){
        const a = new Component('a');
        a.AddAtributte('href',link.toString());
        return a;
    }   
    static createImage(path,width,height){
        const image = new Component('img');
        if (height!==undefined && width!==undefined) {
            image.AddAtributte('height',`${height.toString()} px`);
            image.AddAtributte('width',`${width.toString()} px`);
        }
        image.AddAtributte('src',path.toString());
        return image;
    }
    static createText(text){
        const span = new Component('span');
        span.Element.innerText = text;
        return span;
    }
}


