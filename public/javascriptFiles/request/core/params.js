export function params() {
    const params = window.location.search.replace('?',' ').trim();
    const paramsArray = params.split('&');
    function keysArray(paramsArray) {
        function keysParams(param) {
            const separetor = param.indexOf('=');
            return param.substring(0,separetor);
        }
        if(Array.isArray(paramsArray)){
        const keysArray = []
        for (let index = 0; index < paramsArray.length; index++) {
            keysArray.push(keysParams(paramsArray[index]));
        }
        return keysArray;
        }else{
            throw 'error in convert Array keys params'
        }
    }
    function valuesArray(paramsArray) {
        function valuesParams(param) {
            const separetor = param.indexOf('=');
            return param.substring(separetor+1,param.length);
        }
        if(Array.isArray(paramsArray)){
        const valuesArray = []
        for (let index = 0; index < paramsArray.length; index++) {
            valuesArray.push(valuesParams(paramsArray[index]));
        }
        return valuesArray;
        }else{
            throw 'error in convert Array values params'
        }
    }
    const keysArrays = keysArray(paramsArray);
    const valuesArrays = valuesArray(paramsArray);
    let paramsToJson = '{';
    for (let index = 0; index < paramsArray.length-1; index++) {
        paramsToJson+=(`"${keysArrays[index]}":"${valuesArrays[index]}",`);
    } 
    paramsToJson+=(`"${keysArrays[keysArrays.length-1]}":"${valuesArrays[keysArrays.length-1]}"}`);
    return JSON.parse(paramsToJson);
}
//console.log(JSON.parse(paramsToJson(params)))
// let paramsObject = '{';
// for (let index = 0; index < paramsArray.length; index++) {
//     paramsObject.concat();
// }