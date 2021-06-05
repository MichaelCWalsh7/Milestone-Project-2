// --------Essential Variables:

const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let anagram = [];
let anagramArray = [];
let vowelsUsed = [];
let consonantsUsed = [];
let anagramString = "";
let inputLettersArray = [];
let addLetter

let vNum = 3;
let cNum = 6;

//  --------Event Listeners:

$(".anagram-container").on("click", consoleLogger)
$("#enterButton").on("click",);
$("#deleteButton").on("click", deleteLetter);
$(".letter-button").on("click", function(){
    
   
    
    // Gets the id of the button pushed and it's contents to the inputLettersArray
    let inputId = this.id;
    // Might be good to add a hashtag to the above code 

    // Disables the button to avoid duplicate letters appearing in string. 
    $(`#${inputId}`).prop('disabled', true);
    
    
     // Adds the button pushed to an array to be displayed to the user
    let inputToPush = $(`#${inputId}`).text();
    inputLettersArray.push(inputToPush);    
    console.log(inputLettersArray);

    // Adds class of button-pushed-x to the button that was pressed so it can be easily deleted later. 
    var l = inputLettersArray.length;
    console.log(l);
    $(`#${inputId}`).addClass(`button-pressed-${l}`);
    anagramStringGenerator();
})
//  --------Functions:


function consoleLogger() {
    anagramGenerator();
    anagramStringGenerator();
    letterButtonsGenerator();
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
    let anagramStringToModify = inputLettersArray.toString();
    anagramString = anagramStringToModify.replace(/,/g, "");
    $("#textInput").text(`${anagramString}`);
}

function letterButtonsGenerator() {
    for (var k = 0; k <= anagramArray.length; k++) {
        $(`#button${k + 1}`).text(anagramArray[k]);
    }
    // $(`#button${9}`).text(anagramArray[0]);
    // This is a stupid fix But i have no idea why it's not working for the first character in the array
    // It's becasue there is no button 0!!
}

function deleteLetter() {
    // Removes the letter from the text input div    
    inputLettersArray.pop();
    anagramStringGenerator();
    // Reactivates the button for possible later use. 
    var m = inputLettersArray.length;
    $(`.button-pressed-${m + 1}`).prop('disabled', false);

}

function addInputToAnswer() {
   
}

function gameGenerator(diffculty, time) {

}
function setTimer(time) {

}

// function wordChecker(userInput) {

//     // Stroes user input as a variable to compared
//     userInput = $("#textInput").text();
//     console.log(userInput);    
//     console.log($.getJSON(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${userInput}`));    
// }

function wordStorer(userInput, storedWords) {

}

function addWordsToBlackboard(userInput) {

}

function difficultySetter() {

}