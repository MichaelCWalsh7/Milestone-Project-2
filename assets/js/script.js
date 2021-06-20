document.addEventListener("DOMContentLoaded", function () {
    $(".game-container").css("display", "none");
    $(".game-win-screen").css("display", "none");
    $(".game-lose-screen").css("display", "none");
    $(".text-input-container").css("display", "none");
    $(".left-button").prop("disabled", true);
})

//  --------Event Listeners:

$("#playButton").on("click", gameScreenDisplay);
$("#enterButton").on("click", wordValidator);
$("#deleteButton").on("click", deleteLetter);
$("#clearButton").on("click", clearInput);
$(".ready-button").on("click", gameStart);
$(".back-to-game").on("click", gameStart);
$("#volumeSlider").on("input", setVolume);
$(".left-button").on("click", lowerDifficulty);

$(".letter-button").on("click", function () {

    // CALLBACK POTENTIAL/Needs to be rewritten

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


    // Then they are put through a Fisher-Yates algorithm to mix the vowels and consonants
    for (var i = anagramArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [anagramArray[i], anagramArray[j]] = [anagramArray[j], anagramArray[i]]; // swap
    }

    // Adds the content of the array to the buttons
    for (var k = 0; k <= anagramArray.length; k++) {
        $(`#button${k + 1}`).text(anagramArray[k]);
    }

}

function setVolume() {
    // Changes the volume display figure on the offcanvas UI
    sliderValue = document.getElementById("volumeSlider").value;
    $("#volumeLevel").text(sliderValue + "%");

    // Calls a function to change the gradient of the range slider
    rangeGradientSet(sliderValue);
}

function rangeGradientSet(sliderValue) {
    // Sets the gradient colour of the slider to the same as the range value
    $("#volumeSlider").css("background", 
    `linear-gradient(90deg, rgb(33, 150, 243) ${sliderValue}%, rgb(214, 214, 214) ${sliderValue}%)`)

    // Calls a function to change the audio volume
    // VolumeSet(sliderValue);
}

function lowerDifficulty() {

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

    // Disables the enter button to avoid double clicking errors
    $("#enterButton").prop('disabled', true);

    // Stroes user input as a variable
    userInput = $("#textInput").text();

    // Stores the words on the black board as a variable
    let wordPresent = $(".words-blackboard").text();

    // Initializes a boolean to check if the user has repeated a word
    let repeatingWord = wordPresent.toUpperCase().includes(` ${userInput} `);

    // Checks if the user has, in fact, entered a word
    if (userInput == "") {
        // Prompts the user to enter a word
        errorMessage = "Please enter a word."
        invalidWord(errorMessage);

    // Checks if the word is already present on the answers blackboard
    } else if (repeatingWord) {
        // Prompts the user to enter a new word
        errorMessage = "Sorry, you've already inputted this word."
        invalidWord(errorMessage);

    // Checks that the word is a least 3 letters long
    } else if (userInput.length < 3) {
        // Prompts the user to enter a longer word
        errorMessage = "Words must be at least three letters long."
        invalidWord(errorMessage);
    // Checks if the word exists in the dictionary
    } else {        
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
        // Initializes the response text as a variable
        let  apiData = this.responseText;      

        // Checks if the word exists in the dictionary
        if (this.readyState == 4 && this.status === 404) {
            wordFail();

            // Checks if the word is an abbreviation
        } else if (this.readyState == 4 && this.status == 200) {
            abbreviationCheck(apiData, userInput)            
        }
    }
}

function abbreviationCheck(apiData, userInput) {
    /* Initializes a variable to check how many times "abbreviation" occurs
    in the response text. */
    let aCount = 0;

    /* Checks if the word entered has any definitions that constitute as an abbreviation
    and stores the number of these in the previously initialized variable. */
    if (apiData.includes("abbreviation")) {
        aCount = apiData.match(/abbreviation/g).length;
    }
    
    /* Checks if the number of abbreviative definitions a word has is equal to the number 
    of definitions it has in general. This way, the user is not punished if they input a 
    that exists in the dictionary, but also has an abbreviative definition.*/
    if (aCount == apiData.match(/partOfSpeech/g).length) {
        // Informs the user when a word has only abbreviative definitions.
        $("#message").css("color", "#FF7900").text("Sorry, no abbreviations allowed.");
        clearInput();
     } else {
        // Adds the word to the blackboard and increments the score. 
        wordSuccess(userInput);
     }    
}


function wordSuccess(userInput) {

    // Checks if the word is an abbreviation


    // Finds out what position in the blackboard the answer should be written
    let currentScore = parseInt($("#currentScore").text());
    let newScore = currentScore + 1;

    // Adds the successful word to the blackboard with only the first letter capitalized
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
    // Initialises a variable to push to the user for later
    let wrongMessage = "";

    // Turns the current lives left and total lives into variables
    currentWrong = parseInt($("#currentWrong").text());
    maxWrong = parseInt($("#maxWrong").text());
    
    // Subtracts the variables 
    let wrongDiff = maxWrong - (currentWrong + 1);

    // Warns the user when they've only one incorrect guess remaining.
    if (wrongDiff == 1) {
        wrongMessage = "Only 1 life left! Be Careful!"
        $("#message").css("color", "red").text(`${wrongMessage}`)
      // Warns the user when they've only twoincorrect guesses remaining.
    } else if (wrongDiff == 2) {
        wrongMessage = "Heads up, just 2 lives remaining!"
        $("#message").css("color", "red").text(`${wrongMessage}`)
      /*  Generates a random error message that is different to the previous one,
        so that the user knows their guess is incorrect without having to refer
        to the Lives Left tracker. */
    } else if (wrongDiff >= 3) {
        wrongMessagePicker();
    }
    
    // Increments incorrect answers counter
    incorrectIncremenet(maxWrong, currentWrong);

    // Flashes buttons pressed a red colour to immediately inform the user that word doesn't exist.
    // colourchangeRed();

    // Plays failure sting/sound if audio is enabled.
    // failureSting.play();

    // Reactivates buttons & clears the text input
    clearInput();

   
}

function wrongMessagePicker() {
    
    // Initialises an array of eleven error messages
    let wrongMessages = ["Sorry, that word doesn't exist.", "Not a word, try again!", 
    "Nope, not according to our dictionary.", "Unfortunately, that's not a word...",
    "You might have made that one up...", "No points for that I'm afraid!",
    "Is that some sort of slang?", "That's not a word in English, unfortunately!",
    "Sadly that is not a word.", "We can't give you that one I'm afraid!",
    "Oof, not that one!"];

    // Generates a random number between zero and ten
    let x = Math.floor(Math.random() * 10);

    // Checks if the random message is equal to the one already present
    if ($("#message").text() == wrongMessages[x]) {
        // Removes the error message from the array
        wrongMessages.splice(x, 1);
        // Generates a new random number between zero and nine
        x = Math.floor(Math.random() * 9);
        // Adds the new message to the message div.
        $("#message").css("color", "red").text(`${wrongMessages[x]}`);
    } else {
        // Adds the new message to the message div.
        $("#message").css("color", "red").text(`${wrongMessages[x]}`);
    };    
}

function clearInput() {
    // Reactivates buttons
    $("#enterButton").prop('disabled', false);
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

function incorrectIncremenet(maxWrong, currentWrong) {

    // Increments incorrect answers
    let newWrong = currentWrong + 1;
    $("#currentWrong").text(`${newWrong}`);

    // Checks if user has lost
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