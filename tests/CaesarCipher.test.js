const { CaesarCipher } = require('../src/CaesarCipher.js');


test('CaesarCipher._getLetterFromInputMessage must return a letter by index', () => {
    let currentAlph = null;
    const caesarCipher = new CaesarCipher(currentAlph, 0);
    const messageOne = 'hi there, what is up?';
    const indexOne = 5;
    const letterOne = caesarCipher._getLetterFromInputMessage(messageOne, indexOne)
    const expectedLetterOne = 'e'
    expect(letterOne).toEqual(expectedLetterOne);
});

test('CaesarCipher._getLetterIndexFromAlphabet must return a letter index from alphabet', () => {
    let currentAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const caesarCipher = new CaesarCipher(currentAlph, 0);

    const letterOne = 'e'
    const expectedIndexOne = 4;
    const indexOne = caesarCipher._getLetterIndexFromAlphabet(letterOne, currentAlph)
    expect(indexOne).toEqual(expectedIndexOne);
});