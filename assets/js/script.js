var countDownEl = document.getElementById('countDown');
var highScoreLinkEl = document.getElementById('highScoreLink');
var mainBoxEl = document.getElementById('mainBox');
var qAndAEl = document.getElementById('questionAndAnswerBox');
var finishEl = document.getElementById('allDone');
var highScorePageEl= document.getElementById('highScores');
var answerButtons = document.getElementsByClassName('answerButtons');

var timeLeft = 100; 

var question = document.getElementById("question");
var answer1 = document.getElementById("answerA");
var answer2 = document.getElementById("answerB");
var answer3 = document.getElementById("answerC");
var answer4 = document.getElementById("answerD");
var feedback = document.getElementById("feedback");

var startPage = {
    title: "Coding Quiz Challenge",
    instructions: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
    //startButton: buildStartButton()
};

var question1 = {
    question:"Arrays in JavaScript can be used to store?",
    answerA:["numbers and strings", false],
    answerB:["other arrays and objects", false],
    answerC:["booleans", false],
    answerD:[" all of the above", true]
};

var question2 = {
    question:"Which operator is used to assign a value to a variable?",
    answerA:["=", true],
    answerB:["-", false],
    answerC:["*", false],
    answerD:["X", false]
};

var question3 = {
    question:"How do you write 'Hello World' in an alert box?",
    answerA:["msg('hello world');", false],
    answerB:["msgBox('hello world');", false],
    answerC:["alert('hello world');", true],
    answerD:["alertbox('hello world');", false]
};

var question4 = {
    question:"How do you create a function in JavaScript?",
    answerA:["function:myFunction", false],
    answerB:["function.myFunction()", false],
    answerC:["function = myFunction", false],
    answerD:["function myFunction(){};", true]
};

var question5 = {
    question:"How do you call a function named 'myFunction'?",
    answerA:["function();", false],
    answerB:["call function myFunction();", false],
    answerC:["myFunction();", true],
    answerD:["call myFunction();", false]
};

var question6 = {
    question:"How does a WHILE loop start?",
    answerA:["while(i <= 10; i++)", false],
    answerB:["while i = 1 to 10", false],
    answerC:["while(i <= 10)", true],
    answerD:["while i = 10[i]", false]
};

var question7 = {
    question:"How does a FOR loop start?",
    answerA:["for (i = 0; i < 5)", false],
    answerB:["for i = 1 to 5", false],
    answerC:["for (i = 0; i <= 5; i++)", true],
    answerD:["for (i <= 5; i++)", false]
};

var question8 = {
    question:"How can you add a comment in JavaScript?",
    answerA:["//This is a commment", false],
    answerB:["<--This is a comment-->", false],
    answerC:["/*This is a comment*/", false],
    answerD:["Both A and C", true]
};

var question9 = {
    question:"What is the correct way to write a JavaScript array?",
    answerA:["var colors = 'red', 'yellow', 'blue'", false],
    answerB:["var colors = {'red', 'yellow', 'blue'}", false],
    answerC:["var colors = {'red'}, {'yellow'}, {'blue'}", false],
    answerD:["var colors = ['red', 'yellow', 'blue']", true]
};

var question10 = {
    question:"Which event occurs when the user clicks on an HTML element?",
    answerA:["onchange", false],
    answerB:["onmouseclick", false],
    answerC:["onclick", true],
    answerD:["onmouseover", false]
};

var questionIndex = [
    question1, 
    question2, 
    question3, 
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10
 ];


function runProgram() {
    loadHeader();
    loadStartPage();
        
    function loadStartPage() {
        var welcomeTitle = document.getElementById("welcomeTitle")
        var instructions = document.getElementById("instructions")
        var startButton = document.getElementById('startButton');
    
        function buildStartPage(){
        document.getElementById("startPage").style.visibility = "visible";
        welcomeTitle.textContent = startPage.title;
        instructions.textContent = startPage.instructions;
        startButton.innerHTML = "Start Quiz";
        };
        buildStartPage();
    };

    function runTestQuestions(returnQuestion) {
        for (var i = 0; i < questionIndex.length; i++){
        question.textContent = questionIndex[i].question;
        answer1.textContent = questionIndex[i].answerA[0];
        answer2.textContent = questionIndex[i].answerB[0];
        answer3.textContent = questionIndex[i].answerC[0];
        answer4.textContent = questionIndex[i].answerD[0];

        function verifyAnswer() {
            if (false) {
                timeLeft - 10;
            }
        }
        answerButtons.addEventListener("click") 
        answerButtons.addEventListener("click", verifyAnswer)
    };
    

    /*function countdown() { 
        function displayTimeLeft(){ 
            
            if(timeLeft) {
            timeLeft--;
            } else {
            clearInterval(timeInterval);
            endTimeMessage();
            }
            function endTimeMessage() {
            alert("Sorry! You've ran out of time.")
            };
        };
        var timeInterval = setInterval(displayTimeLeft, 1000);
    };*/
    
};

function loadHeader() {
    //make header visable
    document.getElementById("header").style.visibility = "visible";
    //print timeLeft 
    countDownEl.textContent = timeLeft;
    //build and print highscore link
    function buildHighScoreLink(){
        var anchor = document.createElement('a'); 
        var link = document.createTextNode("View High Scores");
        anchor.appendChild(link); 
        anchor.title = "View High Scores"; 
        anchor.href = "/";
        anchor.style.textDecoration = "none"; 
        // Append the anchor element to the body.
        document.getElementById("highScoreLink").appendChild(anchor); 
    };
    buildHighScoreLink();
}

/*function buildStartButton() {
    var button = document.createElement("BUTTON");
    var buttonText = document.createTextNode("Start Quiz");
    button.appendChild(buttonText);
    
};*/

function hideHeader() {
    document.getElementById("header").style.visibility = "hidden";
};
console.log(questionIndex)
runProgram();
