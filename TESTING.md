## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
    -   Results:
        - [Home](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2F)
        - [Info](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2Finfo.html)
        - [404](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmichaelcwalsh7.github.io%2FMilestone-Project-2%2F404.html)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
    -   Results:
        - [Stylesheet](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/css-validation.png)
        - These results are in the form of a picture rather than the links above, as when the site is passed through the validator, it also validates the entire bootstrap library, which as of bootstrap 5, throws 17 errors and fail validation. 
        - If needed, the css that I've written for the project can be valiated via file upload, or direct input [here.](https://jigsaw.w3.org/css-validator/)

### Testing User Stories from User Experience (UX) Section
-   #### First Time Visitor Goals
    1.  As a First Time Visitor, I want to be able to easily understand the purpose of the site, and understand the rules
         of the game.
        -   Upon entering the site the user is immediately presented with the basic rules of the game, front and center, in a large, striking font and colour. 
        -   Even if the user completely ignores the rules and immediately hits the play button, (as some did in testing,) the user will be taken to a pre-game screen that will once again display the rules to the user. These rules will be slightly more specific, as they will give the user the particular rules for the difficulty that they have selected. In this pre-game rules section there is also a call to action to click on a 'Settings' button, which will open an offcanvas with further details on the rules as explained in the following point.  
        -   If the user does not click play, and instead clicks the 'Settings' button, an offcanvas menu will open where the user is able to change the difficulty. It is not only the difficulty words that the user is shown, however, the rules that change from difficuulty to difficulty are also displayed to the user and change fluidly, as can be seen [here (Easy mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/easy-offcanvas.png) and [here (Medium mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/medium-offcanvas.png).
    2. As a First Time Visitor, I want to be able to easily navigate through the site, find and interact with the content available.
        - Upon entering the main screen the user is presented with two large buttons: 'Play' and 'Settings'.
        - Speaking about the latter 'Settings' button first, it does not take the user to a new page that they would then have to navigate away from. Instead, it takes the user to an offcanvas element. The offcanvas concept should be very familiar to users, especially within the context of a game. Clicking on the large 'X' button on the off canvas will close it, as will clicking anywhere not on the offcanvas, simliar to a modal. 
        - Once the user has clicked play they are shown a large 'Let's Go!' button, a call to action to start playing the game. They are also shown, at the end of the pre-gmae rules section, another alternative 'Settings' button, which will take them to the offcanvas that allows for difficulty changes, volume control etc.
        - Upon entering the info/contact section page, the user will be greeted with two buttons, one to open a modal that contains a contact form; completing the contact form, or clicking anywhere outside the modal will close it, as will hitting the 'X' button in the top right of the modal.
        - Also, underneath the large modal button, there is another even larger button that returns the user to the home screen, so that they never have to use the forward/back buttons or rely on the navbar to navigate through the pages. 
    3. As a First Time Visitor, I want to play the game quickly, and with minimal effort.
        - From entering the home page the user can begin a game with two simple clicks, once on the play button to take them to the game screen and once again on 'Let's Go!' button to actually start the game. 
        - No matter where the user navigates to on the site, playing the game is only ever a maximum of two clicks away.
    4. As a First Time Visitor, I want to be able to easily tell if I have succeeded or failed at the goal of the game.
        - Should the user not suceed at a round of the game, a failure sting will play and the user will be taken to game over fail screen infoming them of the loss.
        - Should the user succeed at a round of the game, a success sting will play and the user will be taken to a congratulatory screen informing them of their victory.
        - The win/lose conditions of the game are also made immediately obvious to the user, once in the pre-game rules, and again with indiciators on top portion of the screen. These are familiar and appropriate parameters for a game, things like timer, score, lives left are standard win/lose conditions and are coloured appropriately. 
        - Error and success messages also guide the user as they play the game.These will be discussed further in the returning user stories section.
    5. As a First Time Visitor, I want to be able to adjust or mute the volume of the game as I so choose.
        - The audio files for the game are disabled by default, for a good UX experience. 
        - The mute toggle switch and volume adjusting slider are the very first thing that the user sees in the 'Settings' menu, which they are prompted to enter thrice from the home screen ot starting a game. 
    6. As a First Time Visitor, I want to control exactly when the game/timer starts so I'm not unduly thrust into a game
        experience that I'm not prepared for.
        - This became a very important user story through testing, as previously mentioned some users would simply click on the big green play button immediately after seeing it and be thrust into a game they weren't quite prepared for. Which, with a countdown timer active, can lead to a bad user experience. So as a result, a feature was implemented to add another button press, between home screen and game start. This turned into another oppurtunity to reitereate the rules for the user and include another call to action with the settings button. 