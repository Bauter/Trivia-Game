# Trivia-Game

---What is this repo?---

The purpose of this repo is to create a basic trivia quiz with "The Witcher" theme with a count down timer.

-The object is to select the correct answer within the allotted amount of time. when the page loads, hit the start button to begin the timer and access the multiple choice questions.

-If the user fails to complete the quiz in time, the quiz will end and any unselected answers will count as incorrect.
  
-Upon completion of the game, the reset button can be clicked to reload the page and start the game over (timer will not reset until start button is clicked).


Initially this project was designed for my "Web-dev coding boot-camp" as an entry level basic javascript / jquery project.

---How was this project created?---

-Coding was done using Visual Studio Code ("https://code.visualstudio.com/") a text editor can be downloaded from their website.

-The styling for this project was done using local CSS. manipulating the divs, text, and images using different CSS styles. Linked in between 'head' tags and within an opening 'script' tag, the file path relative to the html file, and closed by a closing script tag. 

-assets folder created to hold CSS directory, images directory, audio directory, and javascript directory. Each directory containing its corresponding file (CSS - style.css / Images - image files / Audio - audio.mp3 files / Javascript - app.js).

-Favicon icon was created using (https://www.favicon-generator.org/) and converting an image. The generator provides a link to insert above the 'title' tags to add an icon next to the title of the browser tab.

-Button icons created using (https://material.io/resources/icons/?style=baseline). When selecting an icon, an HTML icon tag is provided that should be inserted next to the 'button-text' WITHIN the button element tags. Icon position can be controlled by placing icon tag either before or after the button text, position there for related to tag placement. A link tag can then be inserted into the HTML head tags to link the icon to your document. Styling can be manipulated by the provided icon class selector.

--Within the HTML file---

 -'Main-div' created to hold all other divs.

 -A 'title-div' is created to hold the h1 title element. with img tags placed on each side. Under the 'title-div' div a brief description is created using two 'p' tags.

 -Below a 'start' div is created to hold the 'start-btn' button used to start the game.

 -Below another div is created called 'timer-div' used to hold the timer. This div remains empty and DOM manipulation in app.js is used to input text.

 -Next a 'question-div' is created to hold the questions.

 -Within the 'question-div' a 'form' div is created to hold multiple 'question#' (1-5) divs for each individual question. The opening form tag is provided a name attribute and an onsubmit attribute. The name is used to reference the form, and the onsubmit is used to return a function called onSubmit that will run when the user finishes the quiz and clicks the submit function. This onSubmit function is later created in the app.js file.

 -Each question# div contains a question written between 'p' tags. Below four input tags are created with a value of 'radio' for radio buttons, these provide four choices for each question. Each input tag contains a name attribute that all four inputs share, these reference the five different questions. Each of the four input tags within each question contains a different value. These values are used to associated each different choice.

 -Below each of the five question divs, outside of the last question closing div tag, but before the closing form tag, a submit button is created using button tags. This is the submit button our form will reference. 

 -Outside of the 'question-div' a 'result-div' is created and left empty. We will use DOM manipulation to input our quiz results into this div.

 -Below a 'reset-div' is created to hold the 'reset' button.

 -Outside of the closing 'main-div' tag we use an 'audio' element tag with a 'src' attribute refrencing the 'withcer.mp3' file inside the Audio directory. 

---In the Javascript app.js file---

-The onSubmit function is created. 
 -Inside we define our 'correctAnswer' and 'wrongAnswer' variables and set to 0. Next an 'answerArray' is created containing five strings, each representing a correct answer.

 -Next 5 variables are defined called 'question#' (1-5). Each variable is set equal to document.forms[form-name][input-name].value. We use this to pull the value from the selected input of each of the five questions.

 -Then a conditional if / else statement is created for each question. each if statement compares 'question#' (1-5) variable to the answerArray index of the correct answer. If the value is the same as the indexed string in the array, 'correctAnswers' is incremented plus 1. If this value is not equal, 'incorrectAnswers' is incremented plus 1.

 -Below the five if / else statements we define another variable called 'result'. The innerHTML method is then used on 'result' to write text to the empty HTML result div.

 -Next we use Jquery methods '.empty()' to empty the 'question-div' clearing the questions from our HTML


---Guidelines for Collaboration---

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

-!However!-

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--