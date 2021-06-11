// --------Essential Variables:

const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let anagram = [];
let anagramArray = [];
let vowelsUsed = [];
let consonantsUsed = [];
let anagramString = "";
let inputLettersArray = [];
let addLetter;
var data;

let vNum = 3;
let cNum = 6;

document.addEventListener("DOMContentLoaded", function() {
    $(".game-container").css("display", "none")
    $(".game-win-screen").css("display", "none")
    $(".text-input-container").css("display", "none")
})

//  --------Event Listeners:


$("#playButton").on("click", gameScreenDisplay);
$("#enterButton").on("click", wordChecker);
$("#deleteButton").on("click", deleteLetter);
$(".ready-button").on("click", gameStart)
$(".letter-button").on("click", function () {



    // Gets the id of the button pushed and it's contents to the inputLettersArray
    let inputId = this.id;
    // Might be good to add a hashtag to the above code 

    // Disables the button to avoid duplicate letters appearing in string. 
    $(`#${inputId}`).prop('disabled', true);


    // Adds the button pushed to an array to be displayed to the user
    let inputToPush = $(`#${inputId}`).text();
    inputLettersArray.push(inputToPush);


    // Adds class of button-pushed-x to the button that was pressed so it can be easily deleted later. 
    var l = inputLettersArray.length;

    $(`#${inputId}`).addClass(`button-pressed-${l}`);
    anagramStringGenerator();
})
//  --------Functions:
function gameScreenDisplay() {
    // Displays the game screen and hides the menu
    $(".banner").css("display", "none") 
    $(".home-menu-container").css("display", "none") 
    $(".game-container").css("display", "block")

    
}

function gameStart() {

    // Generates a random anagram with certain restrictions
    anagramGenerator();

    // Assigns each letter in the anagram to a letter button
    letterButtonsGenerator();

    // Ensures only the correct elements are being displayed.
    $(".ready-button").css("display", "none");
    $(".text-input-container").css("display", "block");
    $(".ready-button").css("display", "none");
    $(".game-win-screen").css("display", "none");
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

function wordChecker(userInput) {

    // Stroes user input as a variable to compared
    userInput = $("#textInput").text();
    
    // Checks if the word is already present on the answers blackboard
    let wordsPresent = $(".words-blackboard").text();
    let repeatingWord = wordsPresent.toUpperCase().includes(`${userInput}`);
    if (repeatingWord) {
        console.log("Sorry, you've already inputted this word.")
        wordFail();
    } else if (userInput == "") {
        // Checks if the user has, in fact, entered a word. 
        console.log("Please enter a word.")
    } else {
        // Checks if the word exists in the dictionary
        var xhr = new XMLHttpRequest();

        xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${userInput}`);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 404) {
                console.log('Error, word does not exist.')
                wordFail();
            } else if (this.readyState == 4 && this.status == 200) {
                console.log("Success, word exists.")
                wordSuccess();
            }
        }
    }
}

function wordSuccess(userInput) {

    // Stroes user input as a variable
    userInput = $("#textInput").text();


    // Increments score counter
    let currentScore = parseInt($("#currentScore").text());
    let newScore = currentScore + 1;
    $("#currentScore").text(`${newScore}`)

    // Checks if user has won
    let maxScore = parseInt($("#maxScore").text())
    if (newScore == maxScore) {
        gameWin();
    }

    // Informs user of their success by flashing pushed buttons a green colour
    // colourChangeGreen(); 

    // Plays successful word sting/sound if audio is enabled.
    // successSting.play();

    // Adds the successful word to the blackboard in lower case
    let inputToBlackboard = userInput.toLowerCase();
    $(`.word-${newScore}`).text(`${inputToBlackboard}`);

    // Reactivates buttons clears text input field
    for (var n = 0; n <= 10; n++) {
        $(`.button-pressed-${n}`).prop("disabled", false);
        $(".letter-button").removeClass(`button-pressed-${n}`)
    }

    $("#textInput").text("");
    inputLettersArray = [];

}

function wordFail() {

    // Informs user this word does not exist by flashing pushed buttons a red colour
    // colourchangeRed();

    // Plays failure sting/sound if audio is enabled.
    // failureSting.play();

    // Reactivates buttons clears text input field
    for (var n = 0; n <= 10; n++) {
        $(`.button-pressed-${n}`).prop("disabled", false);
        $(".letter-button").removeClass(`button-pressed-${n}`)
    }

    $("#textInput").text("");
    inputLettersArray = [];
}

function gameWin() {

    // Changes the game screen to the game victory screen
    $(".game-container").css("display", "none");
    $(".game-win-screen").css("display", "block");
}

function colourChangeGreen() {

}

function colourChangeRed() {

}

function difficultySetter() {

}