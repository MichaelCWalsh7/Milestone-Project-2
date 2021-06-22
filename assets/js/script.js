document.addEventListener("DOMContentLoaded", function () {
    $(".game-container").css("display", "none");
    $(".letter-button-container-easy").css("display", "none");
    $(".letter-button-container-medium").css("display", "none");
    $(".letter-button-container-hard").css("display", "none");
    $(".letter-button-container-genius").css("display", "none");
    $(".game-win-screen").css("display", "none");
    $(".game-lose-screen").css("display", "none");
    $(".enter-delete-buttons").css("display", "none");
    $(".text-input-container").css("display", "none");
    $("#lowerDifficultyArrow").prop("disabled", true);
    $("#lowerDifficultyArrow").css("opacity", ".5");
    $(".letters-container").css("display", "none");
})

//  --------Event Listeners:

$("#playButton").on("click", gameScreenDisplay);
$("#enterButton").on("click", wordValidator);
$("#deleteButton").on("click", deleteLetter);
$("#clearButton").on("click", clearInput);
$(".ready-button").on("click", difficultyTracker);
$(".back-to-game").on("click", difficultyTracker);
$("#volumeSlider").on("input", setVolume);
$("#lowerDifficultyArrow").on("click", lowerDifficulty);
$("#increaseDifficultyArrow").on("click", increaseDifficulty);


$(".letter-button").on("click", function () {

    // Clears the message area
    $("#message").text("");

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
//  --------FUNCTIONS:


function gameScreenDisplay() {
    // Displays the game screen and hides the menu
    $(".banner").css("display", "none")
    $(".home-menu-container").css("display", "none")
    $(".game-container").css("display", "block")

}

//  --------Difficulty Handling Functions:

function increaseDifficulty() {
    // Enusres that the lower difficulty button is now active
    $("#lowerDifficultyArrow").prop("disabled", false);
    $("#lowerDifficultyArrow").css("opacity", "1");

    // Initialises a variable for the difficulty span
    let difficulty = $("#difficulty").text();

    // Changes difficulties and the difficulty displayed to the user
    if (difficulty == "Easy") {
        // Changes difficulty from Easy to Medium
        $("#difficulty").text("Medium");
        displayMediumDifficulty();

    } else if (difficulty == "Medium") {
        // Changes difficulty from Medium to Easy
        $("#difficulty").text("Hard");
        displayHardDifficulty();

    } else if (difficulty == "Hard") {
        // Changes difficulty from Hard to Genius
        $("#difficulty").text("Genius");
        displayGeniusDifficulty();


        // Disables the increase difficulty button
        $("#increaseDifficultyArrow").prop("disabled", true);
        $("#increaseDifficultyArrow").css("opacity", ".5");
    }
}

function lowerDifficulty() {
    // Enusres that the increase difficulty button is now active
    $("#increaseDifficultyArrow").prop("disabled", false);
    $("#increaseDifficultyArrow").css("opacity", "1");

    // Initialises a variable for the difficulty span
    let difficulty = $("#difficulty").text();

    // Changes difficulties and the difficulty displayed to the user
    if (difficulty == "Genius") {
        // Changes difficulty from Genius to Hard
        $("#difficulty").text("Hard");
        displayHardDifficulty();

    } else if (difficulty == "Hard") {
        // Changes difficulty from Hard to Medium
        $("#difficulty").text("Medium");
        displayMediumDifficulty();

    } else if (difficulty == "Medium") {
        // Changes difficulty from Medium to Easy
        $("#difficulty").text("Easy");
        displayEasyDifficulty();


        // Disables the lower difficulty button
        $("#lowerDifficultyArrow").prop("disabled", true);
        $("#lowerDifficultyArrow").css("opacity", ".5")

    }
}

function displayEasyDifficulty() {
    /* Changes the offcanvas spans to display the correct difficulty
    information */
    $("#settingsLetters").text("12");
    $("#settingsScore").text("20");
    $("#settingsTimer").text("4:00");
}

function displayMediumDifficulty() {
    /* Changes the offcanvas spans to display the correct difficulty
    information */
    $("#settingsLetters").text("11");
    $("#settingsScore").text("20");
    $("#settingsTimer").text("4:00");
}

function displayHardDifficulty() {
    /* Changes the offcanvas spans to display the correct difficulty
    information */
    $("#settingsLetters").text("10");
    $("#settingsScore").text("25");
    $("#settingsTimer").text("3:30");
    $("#settingsConsonants").text("All consonants are allowed")
}

function displayGeniusDifficulty() {
    /* Changes the offcanvas spans to display the correct difficulty
    information */
    $("#settingsLetters").text("9");
    $("#settingsScore").text("25");
    $("#settingsTimer").text("3:15");
    $("#settingsConsonants").text("All consonants are allowed");
}

function difficultyTracker() {
    // Initialises a variable for the difficulty span
    difficulty = $("#difficulty").text();

    /* Resets the display of the letter button containers in case the user 
    has restarted the game and changed the difficulty */
    letterButtonHide();

    if (difficulty == "Easy") {
        // Calls a function to initialise the game in Easy mode
        initEasyDifficulty();
    } else if (difficulty == "Medium") {
        // Calls a function to initialise the game in Medium mode
        initMediumDifficulty();
    } else if(difficulty == "Hard") {
        // Calls a function to initialise the game in Hard mode
        initHardDifficulty();
    } else if (difficulty =="Genius") {
        // Calls a function to initialise the game in Genius mode
        initGeniusDifficulty();
    }
}

function initEasyDifficulty() {
    // Sets up variables for callbacks to play the game on Easy mode
    vowelNumber = 4;
    consonantNumber = 8;
    timer = 4;
    score = 20;
    // Loads/removes the correct game screen elements
    gameStart(score);
    $(".letters-container").css("display", "block");
    $(".letter-button-container-easy").css("display", "block");
    // Generates and anagram of the approrpiate length
    anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initMediumDifficulty() {
    // Sets up variables for callbacks to play the game on Medium mode
    vowelNumber = 4;
    consonantNumber = 7;
    timer = 4;
    score = 20;
    // Loads/removes the correct game screen elements
    gameStart(score);
    $(".letters-container").css("display", "block");
    $(".letter-button-container-medium").css("display", "block");
    // Generates and anagram of the approrpiate length
    anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initHardDifficulty() {
    // Sets up variables for callbacks to play the game on Hard mode
    vowelNumber = 3;
    consonantNumber = 7;
    timer = 3;
    score = 25;
    // Loads/removes the correct game screen elements
    gameStart(score);
    $(".letters-container").css("display", "block");
    $(".letter-button-container-hard").css("display", "block");
    // Generates and anagram of the approrpiate length
    anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initGeniusDifficulty() {
    // Sets up variables for callbacks to play the game on Genius mode
    vowelNumber = 3;
    consonantNumber = 6;
    timer = 3;
    score = 25;
    // Loads/removes the correct game screen elements
    gameStart(score);
    $(".letters-container").css("display", "block");
    $(".letter-button-container-genius").css("display", "block");
    // Generates and anagram of the approrpiate length
    anagramGenerator(vowelNumber, consonantNumber, difficulty);
}



function letterButtonHide() {
    /* Resets the display of the letter button containers in case the user 
    has restarted the game and changed the difficulty */
    $(".letter-button-container-easy").css("display", "none");
    $(".letter-button-container-medium").css("display", "none");
    $(".letter-button-container-hard").css("display", "none");
    $(".letter-button-container-genius").css("display", "none");
}

function gameStart(score) {

    // Clears the table of words in the event that the user has started the game from the game over screen
    for (var x = 0; x <= 25; x++) {
        $(`.word-${x}`).text("");
    }

    // Calls the timer
    // startTimer()

    // Sets the appropriate score according to difficulty
    $("#maxScore").text(score)

    // Resets score & incorrect answers counters
    $("#currentScore").text("0");
    $("#livesLeft").text("5");
    // Resets the error/success message div
    $("#message").text("");

    // Ensures only the correct elements are being displayed.
    $(".ready-button").css("display", "none");
    $(".text-input-container").css("display", "block");
    $(".game-container").css("display", "block");
    $(".game-win-screen").css("display", "none");
    $(".game-lose-screen").css("display", "none");

}

function anagramGenerator(vowelNumber, consonantNumber, difficulty) {

    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const consonantsEasy = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N',
     'P', 'R', 'S', 'T', 'V', 'W', 'Y'];
    const consonantsHard = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

    // Initialises block scope variables needed to succinctly generate an anagram. 
    let anagramArray = [];
    let vowelsUsed = [];
    let consonantsUsed = [];
    let consonants = [];
    // These variables are arbritarily declared here, but they could be read from a div contained in the settings modal!!

    // Generates a number of random non-repeating vowels
    while (vowelsUsed.length < vowelNumber) {
        let vowelIndexer = Math.floor(Math.random() * 5);
        if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
            vowelsUsed.push(vowels[vowelIndexer])
        }
    }
    // Checks difficulty settings to determine which consonants will be used
    if (difficulty == "Easy" || difficulty == "Medium") {
        consonants = consonantsEasy;
    } else if (difficulty == "Hard" || difficulty == "Genius") {
        consonants = consonantsHard;        
    }
    // Generates a number of random non-repeating consonants
    while (consonantsUsed.length < consonantNumber) {
        let consonantIndexer = Math.floor(Math.random() * consonants.length);
        if (consonantsUsed.includes(consonants[consonantIndexer]) === false ) {
            consonantsUsed.push(consonants[consonantIndexer])
        }
    }

    //The consonants and vowels generated are concatenated into an array
    anagramArray = vowelsUsed.concat(consonantsUsed);


    // Then they are put through a Fisher-Yates algorithm to mix the vowels and consonants
    for (var i = anagramArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [anagramArray[i], anagramArray[j]] = [anagramArray[j], anagramArray[i]]; // swap
    }

    // Changes the difficulty variable to lower case to match up with the button ids
    difficulty = difficulty.toLowerCase();
    // Adds the content of the array to the buttons
    for (var k = 0; k <= anagramArray.length; k++) {
        $(`#${difficulty}Button${k + 1}`).text(anagramArray[k]);
    }


    // Shows the enter and delete buttons
    $(".enter-delete-buttons").css("display", "block");
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
        `linear-gradient(90deg, rgb(0, 51, 102) ${sliderValue}%, rgb(166, 171, 189) ${sliderValue}%)`)

    // Calls a function to change the audio volume
    // VolumeSet(sliderValue);
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
    // Clears any lingering css effects
    // $("#message").css("");
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
        let apiData = this.responseText;

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
    word that exists in the dictionary, but also has an abbreviative definition.*/
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

    // Calls a function to increment life counter should a word meet the requirements
    lifeGain(userInput);

    // Increments score counter
    scoreIncrement();

    // Informs user of their success by flashing pushed buttons a green colour
    // colourChangeGreen(); 

    // Plays successful word sting/sound if audio is enabled.
    // successSting.play();



}

function lifeGain(userInput) {
    // Initializes a variable to check difficulty
    let difficulty = $("#difficulty").text();
    // Initializes variables to increment the life counter
    let lives = parseInt($("#livesLeft").text());
    // Gives the user an extra life if their word is longer than 7 letters
    if (difficulty != "Genius" && userInput.length > 6) {
        // Increments the life counter
        $("#livesLeft").text(`${lives + 1}`)
        lifeGainMessage();
    }
}

function lifeGainMessage() {
    // 
    let bonusMessages = ["Nice! You earned a life!", "Great job! Have a bonus life!", 
        "Good spot, that got you a new life!", "Very impressive!! +1 lives!", 
        "Excellent vocab, here's a bonus life!!", 
        "*low whistle* One more life for that one!!"]

    // Generates a random number between zero and 5
    let x = Math.floor(Math.random() * 5);

    // Checks if the random message is equal to the one already present
    if ($("#message").text() == bonusMessages[x]) {
        // Removes the error message from the array
        bonusMessages.splice(x, 1);
        // Generates a new random number between zero and nine
        x = Math.floor(Math.random() * 9);
        // // Gives the div a celebratory rainbow colour
        // rainbowColour();
        // Adds the new message to the message div.
        $("#message").css("color", "green").text(`${bonusMessages[x]}`);
    } else {
        // // Gives the div a celebratory rainbow colour
        // rainbowColour();
        // Adds the new message to the message div.
        $("#message").css("color", "green").text(`${bonusMessages[x]}`);
    };
}

// function rainbowColour() {
//     $("#message").css("background-image", `linear-gradient(to left, violet, indigo,
//         blue, green, orange, red)`);
//     $("#message").css("-webkit-background-clip", "text");
//     $("#message").css("-webkit-text-fill-color", "transparent");
//     $("#message").css("background-repeat", "repeat");

// }

function wordFail() {
    // Initialises a variable to push to the user for later
    let wrongMessage = "";

    // Turns the current lives left into a variable
    livesLeft = parseInt($("#livesLeft").text());

    // Subtracts the variables 
    let newLives = livesLeft - 1;

    // Warns the user when they've only one incorrect guess remaining.
    if (newLives == 1) {
        wrongMessage = "Only 1 life left! Be Careful!"
        $("#message").css("color", "red").text(`${wrongMessage}`)
        // Warns the user when they've only twoincorrect guesses remaining.
    } else if (newLives == 2) {
        wrongMessage = "Heads up, just 2 lives remaining!"
        $("#message").css("color", "red").text(`${wrongMessage}`)
        /*  Generates a random error message that is different to the previous one,
          so that the user knows their guess is incorrect without having to refer
          to the Lives Left tracker. */
    } else if (newLives >= 3) {
        wrongMessagePicker();
    }

    // Increments incorrect answers counter
    incorrectIncremenet(newLives);

    // Flashes buttons pressed a red colour to immediately inform the user that word doesn't exist.
    // colourchangeRed();

    // Plays failure sting/sound if audio is enabled.
    // failureSting.play();

    // Reactivates buttons & clears the text input
    clearInput();


}

function wrongMessagePicker() {

    // Clears any lingering css effects
    // $("#message").css("");

    // Initialises an array of eleven error messages
    let wrongMessages = ["Sorry, that word doesn't exist.", "Not a word, try again!",
        "Nope, not according to our dictionary.", "Unfortunately, that's not a word...",
        "You might have made that one up...", "No points for that I'm afraid!",
        "Is that some sort of slang?", "That's not a word in English, unfortunately!",
        "Sadly that is not a word.", "We can't give you that one I'm afraid!",
        "Oof, not that one!"
    ];

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

function incorrectIncremenet(newLives) {

    // Increments incorrect answers
    $("#livesLeft").text(`${newLives}`);

    // Checks if user has lost
    if (newLives == 0) {
        gameLose();
    }
}


function gameLose() {
    // Changes the game screen to the game defeat screen
    $(".game-container").css("display", "none");
    $(".game-lose-screen").css("display", "block");
}
