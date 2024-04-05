const fs = require('fs');
const path = require('path');
const wordsFilePath = path.join(__dirname, '..', 'data', 'words.txt');
const wordsData = fs.readFileSync(wordsFilePath, 'utf8');
const words = wordsData.split('\n');

class SecretWord {
    constructor() {
        this.words = [];
        this.initialize();
    }

    initialize() {
        this.words = words.filter(word => word.length >= 5 && word.length <= 12);
        this.randomWord();
    }

    randomWord() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        const randomWord = this.words[randomIndex];
        console.log('Random word:', randomWord);
        return randomWord;
    }
}

new SecretWord();