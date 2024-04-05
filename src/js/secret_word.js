const fs = require('fs');
const path = require('path');

class SecretWord {
    constructor() {
        this.words = [];
        this.initialize();
    }

    initialize() {
        const wordsFilePath = path.join(__dirname, '..', 'data', 'words.txt');
        const wordsData = fs.readFileSync(wordsFilePath, 'utf8');
        const words = wordsData.split('\n');
        
        this.words = words.filter(word => word.length >= 5 && word.length <= 12);
        this.randomWord();
    }

    randomWord() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        const randomWord = this.words[randomIndex];
        return randomWord;
    }
}