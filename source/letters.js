'use strict';

/**
 * Функция для удаления повторяющихся букв
 * @param {string} string - Входная строка
 * @param {boolean} typeOfDeleting - Способ удаления. В случае true -
 * удаляем все повторяющиеся буквы,кроме первой встречающейся. false -
 * удаляем все повторяющиеся буквы,кроме последней встречающейся. В ином случае-
 * удаляем все повторяющиеся буквы. 
 * @returns {string} Строка без повторяющихся букв
 */
const letters = (string, typeOfDeleting) => {

    if (typeof string === 'object') {
        throw new Error('Неверный тип');
    }

    switch (typeOfDeleting) {
        case true:
            return deleteAllSameLettersSavingFirst(string);
        case false:
            return deleteAllSameLettersSavingLast(string);
        default:
            return deleteAllSameLetters(string);
    }
};

/**
 * Функция для удаления из строки всех повторяющихся букв
 * @param {string} string - Входная строка
 * @returns Строка без повторяющихся букв.
 */
function deleteAllSameLetters(string) {
    const badLetters = new Set();
    const goodLetters = new Set();

    string.split('').forEach((letter) => 
    goodLetters.has(letter) ? badLetters.add(letter) : goodLetters.add(letter));

    return Array.from(goodLetters).reduce((temporaryString, letter) => 
        badLetters.has(letter) ? 
        temporaryString : temporaryString += letter, '');
}

/**
 * Функция для удаления из строки всех повторяющихся букв,кроме первой встретившейся.
 * @param {string} string 
 * @returns Строка без повторяющихся букв.
 */
function deleteAllSameLettersSavingFirst(string) {
    return string.split('').reduce((goodLetters, letter) => 
        goodLetters.includes(letter) ? 
        goodLetters : goodLetters += letter,'');
}

/**
 * Функция для удаления из строки всех повторяющихся букв,кроме последней встретившейся.
 * @param {string} string 
 * @returns Строка без повторяющихся букв.
 */
function deleteAllSameLettersSavingLast(string) {
    return string.split('').reduceRight((goodLetters, letter) => 
        goodLetters.includes(letter) ? 
        goodLetters : goodLetters += letter, '').split('').reverse().join('');
}
