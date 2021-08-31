'use strict';

/**
 * Функция для удаления повторяющихся букв
 * @param {string} string 
 * @param {boolean} logicParam 
 * @returns {string} Строка без повторяющихся букв
 */
let letters = (string,logicParam) => {
    switch(logicParam){
        case undefined:
            return deleteAllSameLetters(string);
        case true:
            return deleteAllSameLettersSavingFirst(string);
        case false:
            return deleteAllSameLettersSavingLast(string);
    }
};

function deleteAllSameLetters(string){
    const badLetters = new Set();
    const goodLetters = new Set();
    let resultString = "";

    [...string].forEach(letter => goodLetters.has(letter) ? badLetters.add(letter) : goodLetters.add(letter));
    
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
    const goodLetters = new Set();

    [...string].forEach(letter => goodLetters.add(letter));

    goodLetters.forEach(letter => resultString += letter);
    return resultString;
}

function deleteAllSameLettersSavingLast(string){
    const goodLetters = new Set();

    [...string].reverse().forEach(letter => goodLetters.add(letter));

    return [...goodLetters].reverse().join("");
}
