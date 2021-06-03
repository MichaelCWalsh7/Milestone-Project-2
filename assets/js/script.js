// --------Essential Variables:

const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let anagram = [];
let anagramArray = [];
let vowelsUsed = [];
let consonantsUsed = [];
let anagramString = "";

let vNum = 3;
let cNum = 6;

//  --------Event Listeners:

$(".anagram-container").on("click",  anagramStringGenerator)
$("#enterButton").on("click", anagramGenerator);
$("#deleteButton").on("click", consoleLogger);

//  --------Functions:


function consoleLogger() {
    anagramGenerator();
    anagramStringGenerator();
}

function anagramGenerator() {

    //Clears all arrays so the anagram stays the desired number of characters
    anagramArray = [];
    vowelsUsed = [];
    consonantsUsed = [];

    // Generates a number of random non-repeating vowels
    while (vowelsUsed.length < vNum) {
        let vowelIndexer = Math.floor(Math.random() * 5);
        if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
            vowelsUsed.push(vowels[vowelIndexer])
        }
    }

    // Generates a number of random non-repeating consonants
    while (consonantsUsed.length < cNum) {
        let consonantIndexer = Math.floor(Math.random() * 21);
        if (consonantsUsed.includes(consonants[consonantIndexer]) === false) {
            consonantsUsed.push(consonants[consonantIndexer])

        }
    }

    //The consonants and vowels generated are concatenated into an array
    anagramArray = vowelsUsed.concat(consonantsUsed);


    // Then they are put through a Fisher-Yates algorithm to mix the vowels and adjectives
    for (var i = anagramArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [anagramArray[i], anagramArray[j]] = [anagramArray[j], anagramArray[i]]; // swap
    }
    console.log(anagramArray);   

}

function anagramStringGenerator() {
    let anagramStringToModify = anagramArray.toString();
    anagramString = anagramStringToModify.replace(/,/g, "");
    $("#jumbledAnagram").text(`${anagramString}`);
}

function letterButtonsGenerator() {

}

function gameGenerator(diffculty, time) {

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