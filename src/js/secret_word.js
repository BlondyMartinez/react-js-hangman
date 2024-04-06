class SecretWord {
    constructor() {
        this.words = [];
        this.initialize();
    }

    initialize() {
        try {
            const response = fetch('./data/words.txt');
            const text = response.text();
            const words = text.split('\n');
            
            this.words = words.filter(word => word.length >= 5 && word.length <= 12);
            this.randomWord = this.getRandomWord();
            console.log(typeof this.randomWord, this.randomWord)
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
        return this.randomWord.includes(letter);
    }

    is(word) {
        return word == this.randomWord;
    }

    display(correctLetters) {
        const displayArray = [];
        for (const char of this.randomWord) displayArray.push(correctLetters.includes(char) ? char : '_');
        return displayArray.join(' ');
    }
}

module.exports = SecretWord;