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
        -   Even if the user completely ignores the rules and immediately hits the play button, (as some did in testing,) the user will be taken to a pre-game screen that will once again display the rules to the user. These rules will be slightly more specific, as they will give the user the particular rules for the difficulty that they have selected. 
        -   If the user does not click play, and instead clicks the 'Settings' button, an offcanvas menu will open where the user is able to change the difficulty. It is not only the difficulty words that the user is shown, however, the rules that change from difficuulty to difficulty are also displayed to the user and change fluidly, as can be seen [here (Easy mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/easy-offcanvas.png) and [here (Medium mode)](https://michaelcwalsh7.github.io/Milestone-Project-2/assets/images/readme-images/medium-offcanvas.png).