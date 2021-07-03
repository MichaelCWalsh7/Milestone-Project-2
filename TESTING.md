## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) 
    -   Results:
        - [Home](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2F)
        - [Info](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2Finfo.html)
        - [404](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2F404.html)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
    -   Results:
        - [Stylesheet](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/css-validation.png)
        - These results are in the form of a picture rather than the links above, as when the site is passed through the validator, it also validates the entire bootstrap library, which as of bootstrap 5, throws 17 errors and fail validation. 
        - If needed, the CSS that I've written for the project can be validated via file upload, or direct input [here.](https://jigsaw.w3.org/css-validator/)
-   [JSHint Linter](https://jshint.com/)
    - Results:
        - [script.js](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/linter-results.png)
            - Here the linter describes a warning, where something would be "better written in dot notation". However, this is erroneous, writing this in dot notation would have negative consequences on the functionality of the code.
        - [sendEmail.js](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/emailjs-linter.png)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
    - The Google dev tool Lighthouse was used to ensure that the project followed best practices.
    - Results
        - [Click here to see an image of the results](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/lighthouse-test.png)


### Testing User Stories from User Experience (UX) Section
-   #### First Time Visitor Goals
    1.  As a First Time Visitor, I want to be able to easily understand the purpose of the site, and understand the rules
         of the game.
        -   Upon entering the site the user is immediately presented with the basic rules of the game, front and center, in a large, striking font and colour. 
        -   Even if the user completely ignores the rules and immediately hits the play button, (as some did in testing,) the user will be taken to a pre-game screen that will once again display the rules to the user. These rules will be slightly more specific, as they will give the user the particular rules for the difficulty that they have selected. In this pre-game rules section there is also a call to action to click on a 'Settings' button, which will open an offcanvas with further details on the rules as explained in the following point.  
        -   If the user does not click play, and instead clicks the 'Settings' button, an offcanvas menu will open where the user is able to change the difficulty. It is not only the difficulty words that the user is shown, however, the rules that change from difficulty to difficulty are also displayed to the user and change fluidly, as can be seen [here (Easy mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/easy-offcanvas.png) and [here (Medium mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/medium-offcanvas.png).
    2. As a First Time Visitor, I want to be able to easily navigate through the site, find and interact with the content available.
        - Upon entering the main screen the user is presented with two large buttons: 'Play' and 'Settings'.
        - Speaking about the latter 'Settings' button first, it does not take the user to a new page that they would then have to navigate away from. Instead, it takes the user to an offcanvas element. The offcanvas concept should be very familiar to users, especially within the context of a game. Clicking on the large 'X' button on the off canvas will close it, as will clicking anywhere not on the offcanvas, similar to a modal. 
        - Once the user has clicked play they are shown a large 'Let's Go!' button, a call to action to start playing the game. They are also shown, at the end of the pre-gmae rules section, another alternative 'Settings' button, which will take them to the offcanvas that allows for difficulty changes, volume control etc.
        - Upon entering the info/contact section page, the user will be greeted with two buttons, one to open a modal that contains a contact form; completing the contact form, or clicking anywhere outside the modal will close it, as will hitting the 'X' button in the top right of the modal.
        - Also, underneath the large modal button, there is another even larger button that returns the user to the home screen, so that they never have to use the forward/back buttons or rely on the navbar to navigate through the pages. 
    3. As a First Time Visitor, I want to play the game quickly, and with minimal effort.
        - From entering the home page the user can begin a game with two simple clicks, once on the play button to take them to the game screen and once again on 'Let's Go!' button to actually start the game. 
        - No matter where the user navigates to on the site, playing the game is only ever a maximum of two clicks away.
    4. As a First Time Visitor, I want to be able to easily tell if I have succeeded or failed at the goal of the game.
        - Should the user not succeed at a round of the game, a failure sting will play and the user will be taken to game over fail screen informing them of the loss.
        - Should the user succeed at a round of the game, a success sting will play and the user will be taken to a congratulatory screen informing them of their victory.
        - The win/lose conditions of the game are also made immediately obvious to the user, once in the pre-game rules, and again with indicators on top portion of the screen. These are familiar and appropriate parameters for a game, things like timer, score, lives left are standard win/lose conditions and are coloured appropriately. 
        - Error and success messages also guide the user as they play the game. These will be discussed further in the returning user stories section.
    5. As a First Time Visitor, I want to be able to adjust or mute the volume of the game as I so choose.
        - The audio files for the game are disabled by default, for a good UX experience. 
        - The mute toggle switch and volume adjusting slider are the very first thing that the user sees in the 'Settings' menu, which they are prompted to enter thrice from the home screen to starting a game. 
    6. As a First Time Visitor, I want to control exactly when the game/timer starts so I'm not unduly thrust into a game
        experience that I'm not prepared for.
        - This became a very important user story through testing, as previously mentioned some users would simply click on the big green play button immediately after seeing it and be thrust into a game they weren't quite prepared for. Which, with a countdown timer active, can lead to a bad user experience. So as a result, a feature was implemented to add another button press, between home screen and game start. This turned into another opportunity to reiterate the rules for the user and include another call to action with the settings button.
    7. As a First Time visitor I want to clear track my progress through the game.
        - All successful word entries are added to a blackboard above the letter buttons and as previously mentioned, the other lose/win conditions are displayed brightly at the top of the screen. 
-   #### Returning Visitor Goals
    1. As a Returning Visitor, I want to understand further nuances in the game.
        - While the rules are clearly displayed multiple times on the site, there are some extra nuances to the game that a player might miss from only skimming the rules.
        - For example, no abbreviations are allowed, words must be a minimum of three letters long, words cannot repeat etc.
    2. As a Returning Visitor, I want to change the difficulty to test my skills at the game.
        - There many calls to action for the 'Settings' button which changes game difficulty. Returning users will easily be able to change difficulty and understand the parameters that have changed as a result. 
    3. As a Returning Visitor, I want to contact the user with any questions or queries that I may have with the 
        information provided.
        - Ever present in the navbar is an information circle symbol. Clicking on this will take the user to an "info/contact" page.
        - Once directed to this page there is a large call to action button that says "Click Here To Get In Touch".
        - Clicking on this button will open a modal, that contains a form with inputs for name, email and a message. 
        - Upon validation and form submission the creator will be sent an email via the emailJS API informing them of the user's attempt to contact them. 
        - Successful validation will also close the modal box, prompting the user to return to the home screen. 
    4. As a Returning Visitor, I want to be able to play the game using my keyboard as well the letter buttons provided.
        - Every time an anagram is generated into the letter buttons, event listeners are also generated.
        - Users can press the letter buttons on their keyboards to enter only valid letters into the text input.
        - Hitting the "Enter" key will enter the word in the text input
        - Pushing the "Backspace" key will delete the last letter that's been input.

-   #### Frequent User Goals
    1. As a Frequent User, I want to easily check to see if there are any newly added game modes or challenges
        - While space in this game is a premium, especially on mobile, there are places for alerts to be put for new game modes, which are planned and will be coming soon
        - The offcanvas in particular has a lot of unused space that could be used for an alert
        - The now empty blackboard in the pre-game could also be used to inform the user of a new game mode. 
        - I also intend to include a site-wide navalert when rolling out new game modes.
    2. As a Frequent User, I want to test my skill by trying longer words at harder difficulties.
        - While conceptualising the game it was difficult to say what value length of words should have when there were already so many difficulty variables available. 
        - The solution was to include some code that gave the user an extra life, for words that are 7 letters or more. 
        - There is also a special sound that plays when the user inputs a word that uses all of the letters available, though is an extremely difficult feat to achieve.
    3. As a Frequent User, I want to reset the game at any time, if I win, lose or am in the middle of a game.
        - Another aspect of the game that was difficult to balance was resetting. Having no option to reset would be a bad user experience. However, allowing arbritrary resets would mean the user could just re-roll for whatever letters they preferred.
        - In order to balance these choices, I made resetting from the offcanvas possible at any time, as it is two clicks. And also included a reset button in the navbar that only appears when the user inputs a correct word.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop (on various screen sizes), Laptop, iPad & other various types of tablets, iPhones 5, 6, 7 & X as well as other mobile phone types 
    including, but not limited to, Redmi, Huawei, Samsung and Sony.
-   [Included here is a link to the projects Responsinator page](https://www.responsinator.com/?url=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2Findex.html)
-   A large amount of testing was done to ensure that all aspects of the game were running correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

- As of right now, there is a bug with dictionary API that is used. There are some valid word entries, that it does not accept, as it does not have an entry for them. 
    - There is an array in the games code of these words, (at least all the ones I've been able to find so far,) that searches the users input for these words before calling the API. I've been adding words to this array as they're being discovered in testing. Thus far, the array is 20 words long, and can be found on line 643 of the script.js page.
- The other known bug, is that if the user is on keyboard, and hits the enter button in rapid succession they can sometimes duplicate an answer.
    - This does not happen on mobile or tablet, as the button clicked is immediately disabled. Many fixes were attempted to squash this bug. The `keydown` event was changed to `keyup` to make the firing of the event slower, a global boolean enabling and disabling the word validation process, the event listeners for those specific buttons were turned off etc.
    - However, none of these actions were able to eradicate this bug. Other, much more complex ideas to squash this bug were unable to be implemented due to time contraints. 

### Issues Along The Way

- **Blackboard Clearing Issues**
    1. [Click here to see an image of the issue.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/blackboard-forloop-bug.png)
    2. Above you can see the solution to a problem I was having for some time in relation to trying to clear the words blackboard. Initially I had used code that just cleared the words blackboard div. However, this had the unintended consequence of deleting all of the `<table>` html that that was necessary to display the words in the first place.
    3. Rather than write an individual line of code for every single possible table cell, I simply iterated through them with the for loop shown above. 

- **Serious timer Issues**
    1. [Click here to see an image of the issue.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/weird-timer-bug.png)
    2. When initially programming the timer I ran into a very frustrating and game breaking bug that can be seen above. I had tried to `return` or `break` out of the timer function, but neither of those seemed to fix the problem that: whenever the game ended, the timer continued counting into negative values.
    3. The essential piece of the puzzle that I then found out existed was the clearTimeout function in JavaScript.
    4. Assigning the setInterval code that began the timer a variable, allowed to pass that variable into various functions as callback so that the timer could be stopped or cleared at various points in the game. For example on game win, on game lose, on game reset etc.

- **Volume Slider jQuery Issues**
    1. [In the top part of this image you can see the results of console logging the 'slider' variable with jQuery, whereas in the bottom part you can see the results of console logging the 'slider' variable with native JavaScript.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/slider-unresponsive-in-jquery-1.png)
    2. [In this image you can see the solution](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/slider-unresponsive-in-jquery-2.png)
    3. An issue that gave me a serious headache was my continued and futile to attempts to try and return the value of the volume slider element and initilize it as a variable, with which to adjust the volume according to the user's preference.
    4. I used jQuery whenever possible, both to help myself get more used to the framework, and because it is less verbose than native JavaScript. 
    5. However, the .value method would not return a value with jQuery, and so the code shown in the image above was used initialize the variable instead.

- **Letter Button Array Issues**
    1. [Click here to see an image of this issue.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/no-button-0.png)
    2. One issue that was encountered early on, was that when a new anagram was being generated one of the letters in the anagram would always fail to write to the letter buttons.
    3. The cause of this that after the anagram array was put through a Fisher-Yates shuffle to randomise it, I was writing `anagramArray[x]` to `letter-button-x` (where 'x' was 1), `anagramArray[x]` to `letter-button-x` (where 'x' was 2) and so on.
    4. But of course the `anagramArray` index started at 0, and not at one, whereas I had named the letter buttons 1-9.
    5. The fix here was quite easy once I figured out what was going on and simply changed the above code to `anagramArray[x + 1]` to `letter-button-x`.

- **Answer Duplication Bug**
    1. [Click here to see an image of this issue.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/enter-button-duplication.png)
    2. One of the most fundamental pieces of code, that was written very early on to assure that the game wasn't broken, was lines of code that checked if the word the user had inputted was already on the blackboard before accepting it as an answer.
    3. Obviously without this code, the game would break and the user could just input the same word however many times they wanted. That code was in effect when the above screenshot was taken.
    4. So if there is code to avoid entering duplicative words, how is the above picture possible? The reason is that the enter button was not disabled after clicking it, and so in the wordValidator function the enter button had to be disabled and then re-enabled afterwards.

- **Words Containing Partial Strings of Other Words**
    1. In the early development process, one of the essential lines of code to avoid duplicative words was a simple `if` statement that checked if the  `userInput` variable was already present in the `words-blacboard` div.
    2. This initially worked in theory, but a glaring problem soon became immediately apparent.
    3. The problem being that the .includes function in JavaScript checked for any instance of the `userInput` string. So, for example, the word "books" would not be accepted if the word "book" were already present, as they shared the string `book` despite being two different words. The same problem would arise with "the" and "thespian" with "foot" and "footing" etc.
    4. The solution to the problem was to include a space before and after the `words-blacboard` text input and after the `userinput` template literal also. That way, the letters in each string would be compared individually, and not as part of larger words, plurals, root words etc. 
    5. [Click here to see an image of the fix for this issue.](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/testing/bud-tud-gud-wordcheckfix.png)

### [Click here to return to the README section.](https://github.com/MichaelCWalsh7/Milestone-Project-2/blob/master/README.md)