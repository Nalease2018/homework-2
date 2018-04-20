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
var fruitWordArr;
var hidden = [];
var fruitWord;


//computer picks word to play
function begin() {
    optionNumber = Math.floor((Math.random() * 7));
    fruitWord = options[optionNumber]["name"];
    fruitWordArr = fruitWord.split("");
    fruitWordArr = fruitWord.toLowerCase();
    console.log(fruitWord);

//creates spaces for word
for (var i = 0; i < fruitWordArr.length; i++) {
    if (fruitWordArr[i] === ' ') {
        hidden.push(" ");
    } 
    else {
        hidden.push("_");
    }
};

var hiddenHTML = document.getElementById("fruitWord");
    hiddenHTML.innerHTML = hidden.join("");
};
//Take notes of user guess
window.addEventListener('keydown', function(event) {
    console.log(event);
    UserGuess = event['key'];
    checkLetters();
});

function checkLetters() {

var current = document.getElementById("fruitWord").innerHTML.split('');

if (fruitWordArr.includes(UserGuess) && Guesses.indexOf(UserGuess) < 0) { 
    Guesses.push(UserGuess);
    console.log("Found a letter");

//if letter is in answer it logs in fruit word
for (var i = 0; i < fruitWordArr.length; i++) {
    if (fruitWordArr[i] === UserGuess) {
        current[i] = fruitWordArr[i];
        var currentHTML = document.getElementById("fruitWord");
        currentHTML.innerHTML = current.join("");

}
}
//if letter has been used already it logs in letters under "alreadyGuessed"
var alreadyGuessed = document.getElementById("alreadyGuessed");
        alreadyGuessed.innerHTML = Guesses.join(" ");
} 

//if letter is wrong it decreases amount of guesses made by user
else {
    Guesses.push(UserGuess);
    GuessesLeft--;
    var alreadyGuessed = document.getElementById("alreadyGuessed");
    alreadyGuessed.innerHTML = Guesses.join(" ");
    var left = document.getElementById("GuessesLeft");
    left.innerHTML = GuessesLeft;
    console.log(GuessesLeft);
}

//If user wins alert
if (current.indexOf("_") < 0) {
    alert("You're Fruitastic!")

    var win = document.getElementById("wins");
    win.innerHTML = wins;
    wins++;
    document.getElementById("pre").innerHTML = fruitWordArr;
    reset();
    begin();
};
//if there are no guesses left alert!
if (GuessesLeft === 0) {
    alert("It's begininng to look a lot like christmas, Try Again!")
    document.getElementById("pre").innerHTML = fruitWordArr;
    reset();
    begin();
    }
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
    fruitWord;
    hidden = [];
    fruitWordArr;
}
begin();