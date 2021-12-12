'use strict';
console.log('Hello Sheyna and Amelia!');

let userName = prompt('Hello! What is your name?');
alert('Welcome to my site ' +userName+ '!');
alert('Please answer the following questions. (Yes/No answers please');
//document.write('Welcome to my site ' +userName+ '!'); I don't like "document.write" There has to be a better way.

let counter = 0;
let wasIBornHere = prompt('Was I born in the United States?').toLowerCase();

if (wasIBornHere === 'yes' || wasIBornHere === 'y') {
  //console.log
  alert('That is incorrect.  I was born in Colombia.');
} else if (wasIBornHere === 'no' || wasIBornHere === 'n') {
  //console.log('That is correct!  I was born in Colombia.');
  alert('That is correct!  I was born in Colombia.');
  counter++;
} else {
  //console.log('Please enter a Yes or No for your answer.');
  alert('Please enter a Yes or No for your answer.');
}
let diffLang = prompt('Do I speak another language?').toLowerCase();

if (diffLang === 'yes' || diffLang === 'y') {
  //console.log('That is correct!  I also speak Spanish and French.');
  alert('That is correct!  I also speak Spanish and French.');
  counter++;
} else if (diffLang === 'no' || diffLang === 'n') {
  //console.log('That is incorrect.  I also speak Spanish and French.');
  alert('That is incorrect.  I also speak Spanish and French.');
} else {
  //console.log('Please enter a Yes or No for your answer');
  alert('Please enter a Yes or No for your answer');
}
let favFood = prompt('Do I LOVE Sushi?').toLowerCase();

if (favFood === 'yes' || favFood === 'y') {
  //console.log('That is correct!  I love Sushi, it is my favorite food.');
  alert('That is correct!  I love Sushi, it is my favorite food.');
  counter++;
} else if (favFood === 'no' || favFood === 'n') {
  //console.log('That is incorrect.  Sushi is without a doubt my favorite food.');
  alert('That is incorrect.  Sushi is without a doubt my favorite food.');
} else {
  //console.log('Please enter a Yes or No for your answer');
  alert('Please enter a Yes or No for your answer');
}
let iLoveToTravel = prompt('Do I like traveling?').toLowerCase();

if (iLoveToTravel === 'yes' || iLoveToTravel === 'y') {
  //console.log('That is.....almost correct.  I don\'t like traveling, I absolutely LOVE IT!!');
  alert('That is.....almost correct.  I don\'t like traveling, I absolutely LOVE IT!!');
} else if (iLoveToTravel === 'no' || iLoveToTravel === 'n') {
  //console.log('That is correct!  I don\'t like traveling, I absolutely LOVE IT!!');
  alert('That is correct!  I don\'t like traveling, I absolutely LOVE IT!!');
  counter++;
} else {
  //console.log('Please enter a Yes or No for your answer');
  alert('Please enter a Yes or No for your answer');
}
let doIWoodwork = prompt('Do you think I know how to use power tools?').toLowerCase();

if (doIWoodwork === 'yes' || doIWoodwork === 'y') {
  //console.log('That is correct!  I have been using power tools and working with wood since I was a kid.');
  alert('That is correct!  I have been using power tools and working with wood since I was a kid.');
  counter++;
} else if (doIWoodwork === 'no' || doIWoodwork === 'n') {
  //console.log('That is incorrect.  I have been using power tools and working with wood since I was a kid.');
  alert('That is incorrect.  I have been using power tools and working with wood since I was a kid.');
} else {
  //console.log('Please enter a Yes or No for your answer');
  alert('Please enter a Yes or No for your answer');
}
alert('Nice Job! You got ' +counter+ ' out of 5 correct so far.');
alert('I will give you one for free...I am currently married.');

let myMarriageLength = 20;
//let marriageGuessCounter = 0; //Going to work on this later....
for (let guesses = 0; guesses < 4; guesses++) {
  let howLongHaveIBeenMarried = prompt('How long do you think I have been married? (Enter number of years)');
  let howLongHaveIBeenMarriedInt = parseInt(howLongHaveIBeenMarried);
  if (howLongHaveIBeenMarriedInt < myMarriageLength) {
    alert('That is too low');
  } else if (howLongHaveIBeenMarriedInt > myMarriageLength) {
    alert('That is too high');
  } else if (howLongHaveIBeenMarriedInt === myMarriageLength) {
    alert('That is correct!  Good Job.');
    counter++;
    break;
  } else {
    alert('Hmmmm not sure what happened here beep boop beep');
  }
  if (guesses === 3) {
    alert('Shucks, you ran out of guesses!  The correct answer is 20 years, OMG!');
  }
}

alert('How about a question that has more than one right answer?');

//This next part drove me nuts. I think I tried to make it more complicated than it needed to be. Ryan was a huge help.
let favoriteFoods = ['pizza', 'empanadas', 'pho', 'tamales', 'cake'];
let answeredCorrectly = false;
let userGuesses = 0;
while (userGuesses < 6 && !answeredCorrectly) {
  let foodGuess = prompt('So...other than Sushi, what do you think another one of my favorite foods could be?');

  for (let x = 0; x < favoriteFoods.length; x++) {
    if (favoriteFoods[x] === foodGuess) {
      let correctGuess = foodGuess;
      alert('That is correct! ' + correctGuess + ' is one of my favorite foods');
      answeredCorrectly = true;
      counter++;
    }
  }
  userGuesses++;
  if (userGuesses === 6) {
    alert('Dang!  You ran out of guesses.'); // Made sense to stick with the theme and add an alert for this. 
  }
}

alert('Here is a full list of my favorite foods ' +favoriteFoods); // I can see why .join() would come in real handy here.

// Below I coded 3 different options based on the user's score
if (counter <= 2) {
  alert('Hmmmm, you can do better than that.  You scored ' +counter+ ' out of 7');
} else if (counter > 2 && counter < 5) {
  alert('Not bad....  You scored ' +counter+ ' out of 7');
} else if (counter >= 5) {
  alert('Wow! Its like you already know me.  You scored ' +counter+ ' out of 7');
}

alert('Ok, one last guessing game.  You have 3 tries only this time!');

let correctNumber = Math.floor(Math.random() * 10 + 1); //generates the random number
console.log(correctNumber); //console log it to make sure its working!

for (let n = 0; n < 3; n++) {
  let numGuess = prompt('I am thinking of a number between 1-10. What do you think it is?');
  let guessInt = parseInt(numGuess);
  if (guessInt === correctNumber) {
    alert('Yes!  Excellent guess!');
    break;
  } else if (guessInt !== correctNumber) {
    alert('Not quite, try again.');
  } // Want to add a message to user if all guesses are used up, then tell them the correct number.
}

//The following two functions are used and called on the main HTML page.  Maybe there is a better way to write this?
// eslint-disable-next-line no-unused-vars
function goodbyeMessage() {
  alert('Thanks again for visiting ' + userName + '!');
}

// eslint-disable-next-line no-unused-vars
function highScore() {
  if (counter <= 2) {
    alert('Hmmmm, you can do better than that.  You scored ' +counter+ ' out of 7');
  } else if (counter > 2 && counter < 5) {
    alert('Not bad....  You scored ' +counter+ ' out of 7');
  } else if (counter >= 5) {
    alert('Wow! Its like you already know me.  You scored ' +counter+ ' out of 7');
  }
}

