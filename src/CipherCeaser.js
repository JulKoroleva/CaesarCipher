export class CipherCeaser {
    constructor(alph, shifr) {
        this.alph = alph;
        this.shifr = shifr;

        this.DEBUG = 1;
        this.PRODACTION = 0;
        this.LOG_LEVEL = this.PRODACTION;
    }

    _getLetterFromInputMessage(message, index) {
        return message[index]
    };

    _getLetterIndexFromAlphabet(letter, alph) {
        for (let i = 0; i < alph.length; i++) {
            if (alph[i] === letter) {
                return i
            }
        }
        return null;
    };

    _getCorrectShifrEncrypt(alph, shifr) {
        let correctedShifr = NaN;
        if (shifr < 0) {
            shifr = -shifr;
        }

        let log_message = `alph.length = , ${alph.length}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);

        if (shifr > alph.length) {
            const wholeAlphLengthInShifr = Math.floor(shifr / alph.length);

            log_message = `wholeAlphLengthInShifr = , ${wholeAlphLengthInShifr}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const reduceShifrValue = shifr - (wholeAlphLengthInShifr * alph.length);
            correctedShifr = reduceShifrValue;
        } else {
            correctedShifr = shifr;
        }

        return correctedShifr;
    }

    _plusLetterIndexFromAlphabet(letterIndex, shifr, alph) {
        const correctedShifr = this._getCorrectShifrEncrypt(alph, shifr);
        let log_message = `correctedShifrEncrypt = , ${correctedShifr}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);
        return letterIndex + correctedShifr
    };

    _getLetterFromAlphabet(letterIndex, alph) {
        let resultIndex = -1;
        if (letterIndex >= alph.length) {
            resultIndex = this._correctionIndexLetterForALphabet(letterIndex, alph);
        } else {
            resultIndex = letterIndex;
        }

        return alph[resultIndex]
    };

    _correctionIndexLetterForALphabet(letterIndex, alph) {
        const newLetterIndex = letterIndex - alph.length;
        return newLetterIndex
    };

    encrypt(message, shifr = this.shifr, alph = this.alph) {
        const encryptedMessage = [];

        let log_message = `message.lenght = ${message.length}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);

        for (let i = 0; i < message.length; i++) {
            log_message = `i =  ${i}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const currentLetter = this._getLetterFromInputMessage(message, i);

            log_message = `currentLetter = ${currentLetter}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const currentLetterIndexFromAlphabet = this._getLetterIndexFromAlphabet(currentLetter, alph);

            log_message = `currentLetterIndexFromAlphabet = ${currentLetterIndexFromAlphabet}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            let newLetter = null;

            if (currentLetterIndexFromAlphabet !== null) {
                const changedLetter = this._plusLetterIndexFromAlphabet(currentLetterIndexFromAlphabet, shifr, alph);

                log_message = `changedLetter = ${changedLetter}`;
                this._customConsoleLog(log_message, this.LOG_LEVEL);

                newLetter = this._getLetterFromAlphabet(changedLetter, alph);
            } else {
                newLetter = currentLetter;
            }

            log_message = `newLetter = ${newLetter}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            encryptedMessage.push(newLetter);
        }

        const encryptedMessageString = encryptedMessage.join('');
        return encryptedMessageString
    }


    ////////////////////////////////////////////////
    // decryption
    _getLetterFromAlphabetDecrypt(letterIndex, alph) {
        let resultIndex = -1;
        if (letterIndex < 0) {
            resultIndex = this._correctionIndexLetterForALphabetDecrypt(letterIndex, alph);
        } else {
            resultIndex = letterIndex;
        }

        return alph[resultIndex]
    };

    _correctionIndexLetterForALphabetDecrypt(letterIndex, alph) {
        const newLetterIndex = letterIndex + alph.length;
        return newLetterIndex
    };


    _getCorrectShifrDecrypt(alph, shifr) {
        let correctedShifr = NaN;
        if (shifr < 0) {
            shifr = -shifr;
        }

        let log_message = `alph.length = , ${alph.length}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);

        if (shifr > -alph.length) {
            const wholeAlphLengthInShifr = Math.floor(shifr / alph.length);

            log_message = `wholeAlphLengthInShifr = , ${wholeAlphLengthInShifr}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const reduceShifrValue = shifr - (wholeAlphLengthInShifr * alph.length);
            correctedShifr = reduceShifrValue;
        } else {
            correctedShifr = shifr;
        }
        return correctedShifr;
    }


    _minusLetterIndexFromAlphabet(letterIndex, shifr, alph) {
        const correctedShifr = this._getCorrectShifrDecrypt(alph, shifr);
        const log_message = `correctedShifrDecrypt = , ${correctedShifr}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);
        const trueIndex = letterIndex - correctedShifr;
        return trueIndex
    };


    decrypt(secretMessage, shifr = this.shifr, alph = this.alph) {
        const decryptedMessage = [];

        let log_message = `secretMessage.length = ${secretMessage.length}`;
        this._customConsoleLog(log_message, this.LOG_LEVEL);

        for (let i = 0; i < secretMessage.length; i++) {
            log_message = `i =  ${i}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const secretLetterIndex = this._getLetterFromInputMessage(secretMessage, i);
            log_message = `secretLetterIndex =  ${secretLetterIndex}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            const currentLetterIndexFromAlphabet = this._getLetterIndexFromAlphabet(secretLetterIndex, alph);

            log_message = `currentLetterIndexFromAlphabet =  ${currentLetterIndexFromAlphabet}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            let newLetter = null;

            if (currentLetterIndexFromAlphabet !== null) {
                const newLetterIndex = this._minusLetterIndexFromAlphabet(currentLetterIndexFromAlphabet, shifr, alph);

                log_message = `newLetterIndex = ${newLetterIndex}`;
                this._customConsoleLog(log_message, this.LOG_LEVEL);

                newLetter = this._getLetterFromAlphabetDecrypt(newLetterIndex, alph);
            } else {
                newLetter = secretLetterIndex;
            }

            log_message = `newLetter = ${newLetter}`;
            this._customConsoleLog(log_message, this.LOG_LEVEL);

            decryptedMessage.push(newLetter);
        }

        const decryptedWord = decryptedMessage.join('');
        return decryptedWord
    }

    _testEncryptDecrypt(message, shifr, alph) {
        const encryptedMessage = this.encrypt(message, shifr, alph);
        console.log('encryptedMessage = ', encryptedMessage);
        const decryptedMessage = this.decrypt(encryptedMessage, shifr, alph);
        console.log('decryptedMessage = ', decryptedMessage);
        if (decryptedMessage === message) {
            return true;
        } else {
            return false;
        }
    }

    _customConsoleLog(message, logLevel) {
        if (logLevel === 1) {
            console.log(message);
        } else {
            // do nothing
        }
    }

    _testsSet(message, alph) {

        //Test #1
        {
            const shifr = 1;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_1 = ', testStatus);
        }

        //Test #2
        {
            const shifr = 2;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_2 = ', testStatus);
        }

        //Test #3
        {
            const shifr = 24;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_3 = ', testStatus);
        }

        //Test #4
        {
            const shifr = 25554;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_4 = ', testStatus);
        }

        //Test #5
        {
            const shifr = -25554;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_5 = ', testStatus);
        }

        //Test #6
        {
            const shifr = 0;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_6 = ', testStatus);
        }

        //Test #7
        {
            const shifr = -0;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_7 = ', testStatus);
        }

        //Test #8
        {
            const shifr = alph.length;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_8 = ', testStatus);
        }

        //Test #9
        {
            const shifr = alph.length - 1;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_9 = ', testStatus);
        }

        //Test #10
        {
            const shifr = alph.length + 1;
            const testStatus = this._testEncryptDecrypt(message, shifr, alph);
            console.log('testStatus_10 = ', testStatus);
        }

    }

    _testLatinAlph() {
        console.log('Testing Latin Alphabit... [ BEGIN ]');
        const latinAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const message = "abc";
        this._testsSet(message, latinAlph);
        console.log('Testing Latin Alphabit... [ END ]');
    }


    _testKiryllicAlph() {
        console.log('Testing Kiryllic Alphabit... [ BEGIN ]');
        const kiryllicAlph = ['а', 'б', 'в', 'г', 'д'];
        const message = "абв";
        this._testsSet(message, kiryllicAlph);
        console.log('Testing Kiryllic Alphabit... [ END ]');
    }


    globalTest() {
        this._testLatinAlph();
        this._testKiryllicAlph();
        // ...
    }
};


// executed part
///////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////// 

const someAlph = ['а', 'б', 'в', 'г', 'д'];
const shifr = 13;
const cipherCeaserObject = new CipherCeaser(someAlph, shifr);
//cipherCeaserObject.globalTest();

const plainText = "абв";
const encryptedText = cipherCeaserObject.encrypt(plainText);
const decryptedText = cipherCeaserObject.decrypt(encryptedText);

console.log('decryptedText = ', decryptedText);


