function GeneratesPagesContent(allContent,numberPages) {
    let pokedexPages = [];
    if(Array.isArray(allContent)){
    for (let index = 0; index < allContent.length; index+=numberPages) {
        pokedexPages.push(allContent.slice(index,index+numberPages));
    }
    }else{
        console.error(`${allContent} not array`);
    }
    return pokedexPages;
}
module.exports = GeneratesPagesContent;