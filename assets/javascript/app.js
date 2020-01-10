/*const choices = document.getElementsByClassName('answer-txt');
const question = document.getElementsByClassName('question');
    console.log(choices);
    console.log(question);*/


$(document).ready(() => {
    

    let score = 0;
    let questions = [
        {
            question: "What is the name of Geralt's musical companion?",
            answer1:"Yarpen",
            answer2:"Dandelion",
            answer3:"Eskel",
            answer4:"Ciri",
            correct: 2
        },
        {
            question: "What is one of Geralt's many nicknames?",
            answer1:"White Dog",
            answer2:"Savior of Cintra",
            answer3:"Butcher of Blaviken",
            answer4:"Roque of Redania",
            correct: 3
        },
        {
            question: "Geralt trained as a witcher at what location?",
            answer1:"Redania",
            answer2:"Skellige",
            answer3:"Nilfgaard",
            answer4:"Kaer Morhen",
            correct: 4
        },
        {
            question: "Geralt was trained by?",
            answer1:"Vesemir",
            answer2:"Lamber",
            answer3:"Eskel",
            answer4:"Emhyr",
            correct: 1
        },
        {
            question: "What is the name of Geralt's 'Child of Suprise'?",
            answer1:"riss",
            answer2:"Pavetta",
            answer3:"Calanthe",
            answer4:"Cirilla",
            correct: 4
        },
    ]
    
   
    // start button clicked, start div disappears, question div pops up, timer starts
    $('#start-btn').on('click', () => {
        $('#start').empty();
        $('#questions-div').show();
        $('#timer-div').show();
        // timer start
    });

    $('#submit-btn').on('click', () => {
        $('#questions-div').empty();
        $('#result-div').show();
        // timer start
    });
    

    
    // select one of 4 answers and apply .active class to show selected result
    startGame = () => {
       
    };
    startGame();   
    console.log(score);
    
    
    
    

























})