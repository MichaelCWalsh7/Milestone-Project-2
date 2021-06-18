document.addEventListener("DOMContentLoaded", function () {
    $(".game-container").css("display", "none")
    $(".game-win-screen").css("display", "none")
    $(".game-lose-screen").css("display", "none")
    $(".text-input-container").css("display", "none")
})

//  --------Event Listeners:

$("#playButton").on("click", gameScreenDisplay);
$("#enterButton").on("click", wordValidator);
$("#deleteButton").on("click", deleteLetter);
$("#clearButton").on("click", clearInput);
$(".ready-button").on("click", gameStart);
$(".back-to-game").on("click", gameStart);

$(".letter-button").on("click", function () {

    // CALLBACK POTENTIAL

    // Initialises a a variable of the letters currently present in the text input. 
    let currentLetters = $("#textInput").text();

    // Gets the id of the button pushed and it's contents to push to the inputLettersArray
    let inputId = this.id

    // Disables the button to avoid duplicate letters appearing in string. 
    $(`#${inputId}`).prop('disabled', true);

    // Adds the button pushed input to the text to be displayed to the user
    let inputToPush = $(`#${inputId}`).text();
    let newTextDisplay = `${currentLetters}${inputToPush}`
    $("#textInput").text(`${newTextDisplay}`);

    // Adds class of button-pushed-x to the button that was pressed so it can be easily deleted/deactivated later.
    var l = newTextDisplay.length;
    $(`#${inputId}`).addClass(`button-pressed-${l}`);


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

    // Clears the table of words in the event that the user has started the game from the game over screen
    for (var x = 0; x <= 20; x++) {
        $(`.word-${x}`).text("");
    }

    // Calls the timer
    // startTimer()

    // Resets score & incorrect answers counters
    $("#currentScore").text("0");
    $("#currentWrong").text("0");

    // Ensures only the correct elements are being displayed.
    $(".ready-button").css("display", "none");
    $(".text-input-container").css("display", "block");
    $(".game-container").css("display", "block");
    $(".game-win-screen").css("display", "none");

}

function anagramGenerator() {

    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const consonantsEasy = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'Y'];
    // const consonantsHard = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

    // Initialises block scope variables needed to succinctly generate an anagram. 
    let anagramArray = [];
    let vowelsUsed = [];
    let consonantsUsed = [];

    // These variables are arbritarily declared here, but they could be read from a div contained in the settings modal!!
    let vNum = 3;
    let cNum = 6;


    // Generates a number of random non-repeating vowels
    while (vowelsUsed.length < vNum) {
        let vowelIndexer = Math.floor(Math.random() * 5);
        if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
            vowelsUsed.push(vowels[vowelIndexer])
        }
    }

    // Generates a number of random non-repeating consonants
    while (consonantsUsed.length < cNum) {
        let consonantIndexer = Math.floor(Math.random() * 17);
        if (consonantsUsed.includes(consonantsEasy[consonantIndexer]) === false) {
            consonantsUsed.push(consonantsEasy[consonantIndexer])
        }
    }

    //The consonants and vowels generated are concatenated into an array
    anagramArray = vowelsUsed.concat(consonantsUsed);


    // Then they are put through a Fisher-Yates algorithm to mix the vowels and adjectives
    for (var i = anagramArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [anagramArray[i], anagramArray[j]] = [anagramArray[j], anagramArray[i]]; // swap
    }


    for (var k = 0; k <= anagramArray.length; k++) {
        $(`#button${k + 1}`).text(anagramArray[k]);
    }

}


function deleteLetter() {
    // THIS FUNCTION IS JANK AND NEEDS TWEEKING

    // Converts the text input into an array so the final entry can be popped and it's array letter stored. 
    let currentLetters = $("#textInput").text();
    let inputLettersArray = currentLetters.split('');

    // Reactivates the button for possible later use. 
    var m = inputLettersArray.length;
    $(`.button-pressed-${m}`).prop('disabled', false);

    // Removes the letter from the text input div    
    inputLettersArray.pop();
    let anagramString = ""
    let anagramStringToModify = inputLettersArray.toString();
    anagramString = anagramStringToModify.replace(/,/g, "");
    $("#textInput").text(`${anagramString}`);

}


// function startTimer() {
//     var minute = 0;
//     var sec = 5;
//     setInterval(function () {
//         if (sec < 10 && sec != 00) {
//             document.getElementById("timer").innerHTML = minute + ":" + "0" + sec;
//             sec--;
//         } else if (sec != 00) {
//             document.getElementById("timer").innerHTML = minute + ":" + sec;
//             sec--;
//         }

//         if (sec == 00 && minute != 0) {
//             minute--;
//             sec = 59;
//         } else if (sec == 00 && minute == 0) {
//             gameLose();
//         }
//     }, 1000);
// }

function wordValidator(userInput) {

    // Stroes user input as a variable to compared
    userInput = $("#textInput").text();


    let wordPresent = $(".words-blackboard").text();
    let repeatingWord = wordPresent.toUpperCase().includes(` ${userInput} `);
    if (userInput == "") {
        // Checks if the user has, in fact, entered a word.
        errorMessage = "Please enter a word."
        invalidWord(errorMessage);
    } else if (repeatingWord) {
        // Checks if the word is already present on the answers blackboard
        errorMessage = "Sorry, you've already inputted this word."
        invalidWord(errorMessage); 
    } else if (userInput.length < 3) {
        // Checks that the word is a least 3 letters long
        errorMessage = "Words must be a minimum of three letters long."
        invalidWord(errorMessage);
    } else {
        // Checks if the word exists in the dictionary
        validWordCheck(userInput);
    }
}

function invalidWord(errorMessage) {
    // Displays the appropriate error message to the user
    $("#message").css("color", "#FF7900").text(`${errorMessage}`)
    // Look into using the FadeOut feature to make this text smoother. 
    // The problem with it right now is that after one message it breaks.
        
    // Resets the buttons so the user doesn't have to manually do so
    clearInput();
}

function validWordCheck(userInput) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${userInput}`);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 404) {
            console.log('Error, word does not exist.')
            wordFail();
        } else if (this.readyState == 4 && this.status == 200) {
            console.log("Success, word exists.")
            wordSuccess(userInput);
        }
    }
}

function wordSuccess(userInput) {

    // Adds the successful word to the blackboard in lower case
    let currentScore = parseInt($("#currentScore").text());
    let newScore = currentScore + 1;
    let inputToBlackboard = userInput.charAt(0) + userInput.slice(1).toLowerCase();
    $(`.word-${newScore}`).text(` ${inputToBlackboard} `);

    // Reactivates buttons & clears the text input
    clearInput();


    // Increments score counter
    scoreIncrement();

    // Informs user of their success by flashing pushed buttons a green colour
    // colourChangeGreen(); 

    // Plays successful word sting/sound if audio is enabled.
    // successSting.play();



}

function wordFail() {

    // Informs user this word does not exist by flashing pushed buttons a red colour
    // colourchangeRed();

    // Plays failure sting/sound if audio is enabled.
    // failureSting.play();


    // Reactivates buttons & clears the text input
    clearInput();

    // Increments incorrect answers counter
    incorrectIncremenet();
}

function clearInput() {
    // Reactivates buttons 
    for (var n = 0; n <= 10; n++) {
        $(`.button-pressed-${n}`).prop("disabled", false);
        $(".letter-button").removeClass(`button-pressed-${n}`)

        // Clears text input field
        $("#textInput").text("");
    }
}

function gameWin() {

    // Changes the game screen to the game victory screen
    $(".game-container").css("display", "none");
    $(".game-win-screen").css("display", "block");
}

function messageFadeGreen() {

}

function messageFadeRed() {

}

function scoreIncrement() {

    // Increments score
    let currentScore = parseInt($("#currentScore").text());
    let newScore = currentScore + 1;
    $("#currentScore").text(`${newScore}`)

    // Checks if user has won
    let maxScore = parseInt($("#maxScore").text())
    if (newScore == maxScore) {
        gameWin();
    }
}

function incorrectIncremenet() {

    // Increments incorrect answers
    let currentWrong = parseInt($("#currentWrong").text());
    let newWrong = currentWrong + 1;
    $("#currentWrong").text(`${newWrong}`);

    // Checks if user has lost
    let maxWrong = parseInt($("#maxWrong").text())
    if (newWrong == maxWrong) {
        gameLose();
    }
}


function gameLose() {
    // Changes the game screen to the game defeat screen
    $(".game-container").css("display", "none");
    $(".game-lose-screen").css("display", "block");
}

function difficultySetter() {

}