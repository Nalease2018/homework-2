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
window.addEventListener('keydown', function(event) {
    console.log(event);
    UserGuess = event['key'];
    checkLetters();
});
function checkLetters() {

var current = document.getElementById("currentWord").innerHTML.split('');

if (currentWordArr.includes(UserGuess) && Guesses.indexOf(UserGuess) < 0) {
    console.log("letterfound");
    Guesses.push(UserGuess);

for (var i = 0; i < currentWordArr.length; i++) {
    if (currentWordArr[i] === UserGuess) {
        current[i] = currentWordArr[i];
        var currentHTML = document.getElementById("currentWord");
        currentHTML.innerHTML = current.join("");

}
}
var alreadyGuessed = document.getElementById("alreadyGuessed");
        alreadyGuessed.innerHTML = Guesses.join(" ");
} 
else {
    Guesses.push(UserGuess);
    GuessesLeft--;
    var alreadyGuessed = document.getElementById("alreadyGuessed");
    alreadyGuessed.innerHTML = Guesses.join(" ");
    var left = document.getElementById("GuessesLeft");
    left.innerHTML = GuessesLeft;
    console.log(GuessesLeft);
}

if (current.indexOf("_") < 0) {
    alert("You're Fruitastic!")

    var win = document.getElementById("wins");
    win.innerHTML = wins;
    wins++;
    document.getElementById("pre").innerHTML = currentWordArr;
    reset();
    begin();
};
if (GuessesLeft === 0) {
    alert("It's begininng to look a lot like christmas, Try Again!")
    document.getElementById("picture").src = options[optionNumber]["picture"];
    document.getElementById("pre").innerHTML = currentWordArr;
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
    hidden = [];
    currentWord;
    currentWordArr;
}
begin();