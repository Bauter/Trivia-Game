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

 -Next we use Jquery methods '.empty()' to empty the 'question-div' clearing the questions from our HTML page. Then '.remove()' to remove the 'timer-div' from the HTML page. And '.show()' to show the results div on the HTML page.

 -Below the Jquery methods the clearInterval function is called passing variable 'interval' to cancel the setInterval that will later be created outside of onSubmit.

 -'time' interval later created outside of onSubmit function is set to a value of 0.

 -A variable 'audio' is assigned a value using document.getElementById, passing the id of the audio file 'witcher.mp3'.

 -Jquery '.pause()' method is called on 'audio' to stop the music once onSubmit function is called.

 -Lastly return is set to boolean value fo 'false'.

-Outside of onSubmit function and before 'document.ready' function two variables are defined. A variable of 'time' is defined with a value of 30, this represents the starting value of the interval that will be counted down (the 30sec timer). A variable of 'interval' is defiend and no vaule is given.

 -These variables exist between the onSubmit function and document.ready function because onSubmit is called within the 'onclick' attribute in the HTML file and will not function within the document.ready function. Both onSubmit and document.ready functions need to access both the 'time' and 'interval' variables adn that is why they are defined between the two function.

-A 'document.ready' function is created. This function is used to hold the remaining functions and will not let them work until the webpage is fully loaded. Inside the function...

-A Jquery onclick function is created for the 'start-btn', giving function to the start button created on the HTML page.
 -Inside the start button onclick function Jquery methods are used to manipulate the DOM.
 -Jquery method '.empty()' is used to empty the 'start' div removing the start button.
 -Jquery method '.show()' is used to show the "questions-div' div to provide the questions.
 -Jquery method '.show()' is also used to show the 'timer-div' that the timer will be displayed in.
 -The variable 'interval' is then assigned the value of a function 'setInterval()", inside 'setInterval' a handler is passed called 'timer' this is a function that will be created later. Then a value of 1000 milliseconds is passed as 1000, this is the amount of time setInterval will take to run.
 -A variable 'audio' is assigned a value using document.getElementById, passing the id of the audio file 'witcher.mp3'.
 -Jquery method '.play()' is called on 'audio' to play the audio once start button is clicked.

-A function called 'timer' is created.
 -Inside timer we use a conditional if / else statement to compare the value of time.
 -In the if statement, if 'time' value is greater than 0, time (originally set to 30), is incremented minus 1.
 -in the else statement if 'time' is not greater than 0, clearInterval is used passing and argument of the variable 'interval', canceling setInterval, stopping the countdown.
 -Outside of the if / else statement but still within the 'timer' function Jquery '.html()' method is called on 'timer-div' to print text displaying the interval countdown.

-A Jquery onclick function is created for 'reset-btn'.
 -Inside, Jquery '.reload()' is assigned to global variable 'location'. When reset-btn is clicked, this refreshes the page, resetting the game.
 
---Guidelines for Collaboration---

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

-!However!-

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--