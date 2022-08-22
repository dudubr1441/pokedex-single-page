import {managerContent as manager} from '/javascriptFiles/components/manager.js';
import {Component} from '/javascriptFiles/components/components.js';
export const buttonBackPage = Component.createImage('/images files/backPage.svg',25,25);
buttonBackPage.AddAtributte('id','backpage');
buttonBackPage.addEvent('click',function(){
    manager.backPage();
});
