function onSubmit() { //function will not run inside document.ready.....
    var correctAnswers= 0;
    var wrongAnswers= 0;
    let answerArray = ["Dandelion", "Butcher of Blaviken", "Kaer Morhen", "Vesemir", "Cirilla"];

    let question1 = document.forms["form"]["question1"].value;
    let question2 = document.forms["form"]["question2"].value;
    let question3 = document.forms["form"]["question3"].value;
    let question4 = document.forms["form"]["question4"].value;
    let question5 = document.forms["form"]["question5"].value;

        if(question1 == answerArray[0]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    
        if(question2 == answerArray[1]) { 
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    
        if(question3 == answerArray[2]) { 
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    
        if(question4 == answerArray[3]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    
        if(question5 == answerArray[4]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    
    

    let result = document.getElementById('result-div');
    result.innerHTML = "<h2>Your correct answers: " + correctAnswers + " / Your incorrect answers: " + wrongAnswers +"</h2>"
    $('#questions-div').empty();
    // try to make reset
    return false;
};






$(document).ready(() => {
    
    $('#start-btn').on('click', () => {
        $('#start').empty();
        $('#questions-div').show();
        $('#timer-div').show();
        timer() // timer starts
    });

    // timer function goes here
    timer = function() {
        // start timer and display to DOM
    };

















 // previous attempts at pulling form values and comparing.... left to show work/effort



  //  var correctAnswers= 0;
  //  var wrongAnswers= 0;
  //  let numberOfQuestions = 5;
        // for array approach
  // let answerArray = ["Dandelion", "Butcher of Blaviken", "Kaer Morhen", "Vesemir", "Cirilla"];

    console.log(answerArray[0]);
    console.log(answerArray[1]);
    console.log(answerArray[2]);
    console.log(answerArray[3]);
    console.log(answerArray[4]); 
    
        /* elementsByName selector method

    let question1 = document.getElementsByName("question1");
    let question2 = document.getElementsByName("question2");
    let question3 = document.getElementsByName("question3");
    let question4 = document.getElementsByName("question4");
    let question5 = document.getElementsByName("question5");

        */


            //helpful in array approach
      /*  let question1 = document.forms["form"]["question1"].value;
        let question2 = document.forms["form"]["question2"].value;
        let question3 = document.forms["form"]["question3"].value;
        let question4 = document.forms["form"]["question4"].value;
        let question5 = document.forms["form"]["question5"].value; 
      */

    // start button clicked, start div disappears, question div appears, timer div appears.
    


    // submit button clicked, question div disappears, result div appears, timer div disappears
  /*  $('#submit-btn').on('click', () => {
        $('#questions-div').empty();
        $('#timer-div').hide();
       // checkAnswer();
      //  $('#result-div').show();
        resultDisplay();  // using resultDisplay function with for loop outside of checkAnswer()
    }); */
    

    // conditional statement to evaluate choice value.

        // .checked approach
    /*function checkAnswer () {
       
        
            if (question1[1].checked) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        

        
            if (question2[2].checked) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        

        
            if (question3[3].checked) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        

        
            if (question4[0].checked) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        

        
            if (question5[3].checked) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        
            $("#result-div").text("correct: " + correctAnswers + " / wrong: " + wrongAnswers);
    }; */


        //array approach - inside function
    // function checkAnswer() { 
       



       // let question1 = document.forms["form"]["question1"].value;
       // let question2 = document.forms["form"]["question2"].value;
       // let question3 = document.forms["form"]["question3"].value;
       // let question4 = document.forms["form"]["question4"].value;
       // let question5 = document.forms["form"]["question5"].value; 
        
      /*  for(var i = 1; i <= numberOfQuestions; i++) {
            if(eval("question" + i) == answerArray[i - 1]) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        } */

      /*  if (question1.value == answerArray[0]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };

        if (question2.value == answerArray[1]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };

        if (question3.value == answerArray[2]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };

        if (question4.value == answerArray[3]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };

        if (question5.value == answerArray[4]) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };

        $("#result-div").text("correct: " + correctAnswers + " / wrong: " + wrongAnswers);
        
    }; */

    // using a diff. selector method (querySelector)

  /*  let question1 = document.querySelector('input[name=question1]:checked').value
    let question2 = document.querySelector('input[name=question2]:checked').value
    let question3 = document.querySelector('input[name=question3]:checked').value
    let question4 = document.querySelector('input[name=question4]:checked').value
    let question5 = document.querySelector('input[name=question5]:checked').value



    // array approach outside function

    for (var i = 0; i<=question1.length; i++) {
        if (question1[i].checked) {
            if(question1[i].value == answerArray[0]) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    };

    for (var j = 0; j<=question2.length; j++) {
        if (question2[j].checked) {
            if(question2[j].value == answerArray[1]) { 
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    };

    for (var k = 0; k<=question3.length; k++) {
        if (question3[k].checked) { 
            if(question3[k].value == answerArray[2]) { 
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    };

    for (var l = 0; l<=question4.length; l++) {
        if (question4[l].checked) {
            if(question4[l].value == answerArray[3]) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    };

    for (var p = 0; p<=question5.length; p++) {
        if (question5[p].checked) {
            if(question5[p].value == answerArray[4]) {
                correctAnswers++;
            } else {
                wrongAnswers++;
            };
        };
    };

   
    // resultDisplay function
    resultDisplay = function() {
        $("#result-div").show();
        $("#result-div").text("correct: " + correctAnswers + " / wrong: " + wrongAnswers);
    }
    
    */
    
    
























})