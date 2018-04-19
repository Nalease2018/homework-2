var Guesses = [];
var GuessesLeft = 10;
var Wins = 1;
var UserGuess = "";
var Answer;
var optionNumber;
var options = [{
        name: "banana",
        picture: "../images/banana.png"
    },
    {
        name: "pear",
        picture: "../images/pear.jpg"
    },
    {
        name: "pineapple",
        picture: "../images/pineapple.jpg"
    },
    {
        name: "popsicle",
        picture: "../images/popsicle.jpg"
    },
    {
        name: "strawberry",
        picture: "../images/strawberry.png"
    },
    {
        name: "watermelon",
        picture: "../images/watermelon.jpg"
    }
];
var hidden = [];
var currentWord;
var currentWordArr;

function begin() {
    optionNumber = Math.floor((Math.random() * 7));
    currentWord = options[optionNumber]["name"];
    currentWordArr = currentWord.split("");
    currentWordArr = currentWord.toLowerCase();
    console.log(currentWord);

for (var i = 0; i < currentWordArr.length; i++) {
    if (currentWordArr[i] === ' ') {
        hidden.push(" ");
    } 
    else {
        hidden.push("_");
    }
};

var hiddenHTML = document.getElementById("current_word");
    hiddenHTML.innerHTML = hidden.join("");
};



function reset() {
Guesses = [];
GuessesLeft = 10;
UserGuess = "";
Answer;
optionNumber;
options = [{    
    name: "banana",
    picture: "../images/banana.png"
},
{
    name: "pear",
    picture: "../images/pear.jpg"
},
{
    name: "pineapple",
    picture: "../images/pineapple.jpg"
},
{
    name: "popsicle",
    picture: "../images/popsicle.jpg"
},
{
    name: "strawberry",
    picture: "../images/strawberry.png"
},
{
    name: "watermelon",
    picture: "../images/watermelon.jpg"
    }
];
    hidden = [];
    currentWord;
    currentWordArr;
}
begin();