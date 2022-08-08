function objectConverToarams(object = {}) {
    const arrayKeys = Object.keys(object);
    const arrayValue = Object.values(object);
    let stringFinal = '';
    for (let index = 0; index < arrayKeys.length; index++) {
        if (index !=0) {
            stringFinal+='&';
        }
        stringFinal+=`${arrayKeys[index]}=${arrayValue[index]}`;
    }
    return stringFinal;
}
export function ajax(config) {
    config.method = config.method.toLowerCase();
    xhr = new XMLHttpRequest();
    if(config.async === undefined){
       config.async = false;
    }
    xhr.open(config.method,config.url,config.async);
    xhr.onload = function(){
        if(xhr.status = 200){
            config.success(xhr.responseText);
        }else{
            config.error(xhr.status);
        }
    }
    if(config.method!='get'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(objectConvert(config.data));
    }else{
        xhr.send();
    }
}
/* config example: {method: 'get'
                    ,url:'pokemoncompany/charmander
                    ,async:true
                    ,success:callback()
                    ,error:callback()'
                    ,data: object params}
// url = url req;
// status = return code of req;
/* async = true or false 
    true: method async
    false: method sync
*/
// success = status == 200
// error = status == !(200)
// data = params; ex: 'name=robert&age=28'

const objectTest = {
    method:'get',
    url:'/pokedex/2',
    async:false,
    success(text){
        console.log(text)
    },
    error(status){
        throw `error status: ${status}`;
    }
}
console.log(ajax(objectTest));

