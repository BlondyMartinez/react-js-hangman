class SecretWord {
    constructor() {
        this.words = [];
        this.initialize();
    }

    async initialize() {
        try {
            const response = await fetch('./data/words.txt');
            const text = await response.text();
            const words = text.split('\n');
            
            this.words = words.filter(word => word.length >= 5 && word.length <= 12);
            this.randomWord = this.getRandomWord();
        } catch (error) {
            console.error('Error fetching the file:', error);
        }
    }

    getRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        const randomWord = this.words[randomIndex];
        return randomWord;
    }

    // utility

    containsLetter(letter) {
        console.log(letter, this.randomWord, this.randomWord.includes(letter) )
        return this.randomWord.includes(letter);
    }

    is(word) {
        return word == this.randomWord;
    }

    display(correctLetters) {
        const displayArray = [];
        for (let i = 0; i < this.randomWord.length; i++) displayArray.push(correctLetters.includes(this.randomWord[i]) ? this.randomWord[i] : '_');
        return displayArray;
    }
}

module.exports = SecretWord;