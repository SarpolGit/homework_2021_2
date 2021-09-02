'use strict';

/**
 * Функция для удаления повторяющихся букв
 * @param {string} input - Входная строка
 * @param {boolean} typeOfDeleting - Способ удаления. В случае true -
 * удаляем все повторяющиеся буквы,кроме первой встречающейся. false -
 * удаляем все повторяющиеся буквы,кроме последней встречающейся. В ином случае-
 * удаляем все повторяющиеся буквы. 
 * @returns {string} Строка без повторяющихся букв
 */
const letters = (input, typeOfDeleting) => {

    if (typeof input !== 'string') {
        throw new Error('Неверный тип');
    }

    switch (typeOfDeleting) {
        case true:
            return deleteAllSameLettersSavingFirst(input);
        case false:
            return deleteAllSameLettersSavingLast(input);
        default:
            return deleteAllSameLetters(input);
    }
};

/**
 * Функция для удаления из строки всех повторяющихся букв
 * @param {string} input - Входная строка
 * @returns {string} Строка без повторяющихся букв.
 */
 const deleteAllSameLetters = (input) => {
    const badLetters = new Set();
    const goodLetters = new Set();

    input.split('').forEach((letter) => 
        goodLetters.has(letter) ? badLetters.add(letter) : goodLetters.add(letter));

    return Array.from(goodLetters).reduce((temporaryinput, letter) => 
        badLetters.has(letter) ? 
        temporaryinput : temporaryinput += letter, '');
}

/**
 * Функция для удаления из строки всех повторяющихся букв,кроме первой встретившейся.
 * @param {string} input 
 * @returns {string} Строка без повторяющихся букв.
 */
const deleteAllSameLettersSavingFirst = (input) => {
    return input.split('').reduce((goodLetters, letter) => 
        goodLetters.includes(letter) ? 
        goodLetters : goodLetters += letter, '');
}

/**
 * Функция для удаления из строки всех повторяющихся букв,кроме последней встретившейся.
 * @param {string} input 
 * @returns {string} Строка без повторяющихся букв.
 */
const deleteAllSameLettersSavingLast = (input) => {
    return input.split('').reduceRight((goodLetters, letter) => 
        goodLetters.includes(letter) ? 
        goodLetters : goodLetters += letter, '').split('').reverse().join('');
}
