// --------Essential Variables:

const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let anagram = [];
let vowelsUsed = [];
let consonantsUsed = [];

let vNum = 3;
let cNum = 6;



//  --------Functions:

function vowelGenerator(vNum) {
    // Generates a number of random non-repeating vowels
    while (vowelsUsed.length < vNum) {
        let vowelIndexer = Math.floor(Math.random() * 5);
        if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
            vowelsUsed.push(vowels[vowelIndexer])
        }
    }
}

function consonantGenerator(cNum) {
    // Generates a number of random non-repeating consonants
    while (consonantsUsed.length < cNum) {
        let consonantIndexer = Math.floor(Math.random() * 21);
        if (consonantsUsed.includes(consonants[consonantIndexer]) === false) {
            consonantsUsed.push(consonants[consonantIndexer])
        }
    }
}

function arrayShuffler(array) {
    
}

function arrayToStringConverter(array) {
    
}

function gameGenerator(diffculty, time) {

}

function letterButtonsGenerator() {

}

function setTimer(time) {

}

function wordChecker(userInput) {

}

function wordStorer(userInput, storedWords) {

}

function addWordsToBlackboard(userInput) {

}

function difficultySetter() {

}