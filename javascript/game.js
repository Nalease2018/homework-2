var guesses = [];
var guessesLeft = 7;
var wins = 1;
var userGuess = "";
var answer;
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
    userGuess = event['key'];
    checkLetters();
});

function checkLetters() {

var current = document.getElementById("current_word").innerHTML.split('');

if (currentWordArr.includes(userGuess) && guesses.indexOf(userGuess) < 0) {
    console.log("letterfound");
    guesses.push(userGuess);

for (var i = 0; i < currentWordArr.length; i++) {
    if (currentWordArr[i] === userGuess) {
        current[i] = currentWordArr[i];
        var currentHTML = document.getElementById("current_word");
        currentHTML.innerHTML = current.join("");

}
}
var alreadyGuessed = document.getElementById("already_guessed");
        alreadyGuessed.innerHTML = guesses.join(" ");
} 
else {
    guesses.push(userGuess);
    guessesLeft--;
    var alreadyGuessed = document.getElementById("already_guessed");
    alreadyGuessed.innerHTML = guesses.join(" ");
    var left = document.getElementById("guesses_left");
    left.innerHTML = guessesLeft;
    console.log(guessesLeft);
}

if (current.indexOf("_") < 0) {
    alert("🍓🍐You're Fruitastic🍍🍉!")

    var win = document.getElementById("wins");
    win.innerHTML = wins;
    wins++;
    document.getElementById("pre").innerHTML = currentWordArr;
    reset();
    begin();
};
if (guessesLeft === 0) {
    alert("It's begininng to look a lot like christmas, Try Again!")
    document.getElementById("picture").src = options[optionNumber]["picture"];
    document.getElementById("pre").innerHTML = currentWordArr;
    reset();
    begin();
    }
};

function reset() {
guesses = [];
guessesLeft = 7;
userGuess = "";
answer;
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