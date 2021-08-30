'use strict'

function letters(string,...logicParam){
    if(logicParam.length == 0) 
        return deleteAllSameLetters(string);
    else if(logicParam[0] == 1){
        return deleteAllSameLettersSavingFirst(string);
    }else{
        return deleteAllSameLettersSavingLast(string);
    }
}

function deleteAllSameLetters(string){
    let badLetters = new Set;
    let goodLetters = new Set;
    let resultString = "";

    for(let i = 0; i < string.length; i++){
        if(goodLetters.has(string[i])){
            badLetters.add(string[i]);
        }else{
            goodLetters.add(string[i]);
        }
    }
    
    goodLetters.forEach(letter => resultString += letter);
    for(let i = 0; i < resultString.length; i++){
        if(badLetters.has(resultString[i])){
            resultString = resultString.replace(resultString[i],"");
            i--;
        }
    }

    return resultString;
}

function deleteAllSameLettersSavingFirst(string){
    let resultString = "";
    let goodLetters = new Set;

    for( let i = 0; i < string.length; i++){
        goodLetters.add(string[i]);
    }

    goodLetters.forEach(letter => resultString += letter);
    return resultString;
}

function deleteAllSameLettersSavingLast(string){
    let goodLetters = new Set;

    for( let i = string.length - 1; i >=0; i--){
        goodLetters.add(string[i]);
    }

    return [...goodLetters].reverse().join("");
}