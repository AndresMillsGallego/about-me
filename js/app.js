'use strict';
console.log('Hello Sheyna and Amelia!');
//Dec 12 changed applicable strings to template literal
let userName = prompt('Hello! What is your name?');
alert(`Welcom to my site ${userName}!`);
alert('Please answer the following questions. (Yes/No answers please');
//document.write('Welcome to my site ' +userName+ '!'); I don't like "document.write" There has to be a better way.

//Made 4 arrays actually, 1 for the questions, then another with the corresponding answers.  I decided to make the next list into two arrays so I could really customize the responses. I probably could have kept it in one, but I think its more fun having the responses slightly different.

let yesOrNoQuestions = ['Was I born in the United States?', 'Do I speak another language?', 'Do I LOVE Sushi?', 'Do I like traveling?', 'Do you think I know how to use power tools?'];

let correctAnswers = ['n', 'y', 'y', 'y', 'y'];

let correctResponses = ['I was born in Colombia!', 'I speak Spanish and French as well.', 'It is without a doubt one of my favorite foods!', 'Well, almost correct....I actually LOVE it!', 'I have been woodworking since I was 13 years old.'];

let incorrectResponses = ['I was actually born in Colombia', 'Other than English, I also speak Spanish and French.', 'How can anyone not love Sushi?', 'It is in fact the thing I enjoy most in life.', 'I have been using chopsaws and such for as long as I can remember!'];

let counter = 0;
//New single function made by myself and Angela Jackson.  Amazingly enough it worked the first time through for both of us
function askQuestion() {
  for (let i = 0; i < yesOrNoQuestions.length; i++) {
    let userAnswer = prompt(yesOrNoQuestions[i]).toLowerCase();//automatically saves this string in all lowercase
    if (userAnswer.charAt(0) === correctAnswers[i]) {//compares only the first letter so yes, Yes, y, etc could all work as answers
      alert(`That is correct! ${correctResponses[i]}`);
      counter++;
    } else if (userAnswer.charAt(0) !== correctAnswers[i]) {
      alert(`That is incorrect.  ${incorrectResponses[i]}`);
    } else {
      alert('Error, Error');
    }
  }
}
askQuestion();
// function whereWasIBorn() {
//   let wasIBornHere = prompt('Was I born in the United States?').toLowerCase();
//   //console.log(wasIBornHere);
//   if (wasIBornHere === 'yes' || wasIBornHere === 'y') {
//     //console.log
//     alert('That is incorrect.  I was born in Colombia.');
//   } else if (wasIBornHere === 'no' || wasIBornHere === 'n') {
//     //console.log('That is correct!  I was born in Colombia.');
//     alert('That is correct!  I was born in Colombia.');
//     counter++;
//   } else {
//     //console.log('Please enter a Yes or No for your answer.');
//     alert('Please enter a Yes or No for your answer.');
//   }
// }
// whereWasIBorn();

// function myLanguages() {
//   let diffLang = prompt('Do I speak another language?').toLowerCase();
//   if (diffLang === 'yes' || diffLang === 'y') {
//     //console.log('That is correct!  I also speak Spanish and French.');
//     alert('That is correct!  I also speak Spanish and French.');
//     counter++;
//   } else if (diffLang === 'no' || diffLang === 'n') {
//     //console.log('That is incorrect.  I also speak Spanish and French.');
//     alert('That is incorrect.  I also speak Spanish and French.');
//   } else {
//     //console.log('Please enter a Yes or No for your answer');
//     alert('Please enter a Yes or No for your answer');
//   }
// }
// myLanguages();

// function doILikeSushi() {
//   let favFood = prompt('Do I LOVE Sushi?').toLowerCase();
//   if (favFood === 'yes' || favFood === 'y') {
//     //console.log('That is correct!  I love Sushi, it is my favorite food.');
//     alert('That is correct!  I love Sushi, it is my favorite food.');
//     counter++;
//   } else if (favFood === 'no' || favFood === 'n') {
//     //console.log('That is incorrect.  Sushi is without a doubt my favorite food.');
//     alert('That is incorrect.  Sushi is without a doubt my favorite food.');
//   } else {
//     //console.log('Please enter a Yes or No for your answer');
//     alert('Please enter a Yes or No for your answer');
//   }
// }
// doILikeSushi();

// function doILoveToTravel() {
//   let iLoveToTravel = prompt('Do I like traveling?').toLowerCase();
//   if (iLoveToTravel === 'yes' || iLoveToTravel === 'y') {
//     //console.log('That is.....almost correct.  I don\'t like traveling, I absolutely LOVE IT!!');
//     alert('That is.....almost correct.  I don\'t like traveling, I absolutely LOVE IT!!');
//   } else if (iLoveToTravel === 'no' || iLoveToTravel === 'n') {
//     //console.log('That is correct!  I don\'t like traveling, I absolutely LOVE IT!!');
//     alert('That is correct!  I don\'t like traveling, I absolutely LOVE IT!!');
//     counter++;
//   } else {
//     //console.log('Please enter a Yes or No for your answer');
//     alert('Please enter a Yes or No for your answer');
//   }
// }
// doILoveToTravel();

// function whatIDo() {
//   let doIWoodwork = prompt('Do you think I know how to use power tools?').toLowerCase();
//   if (doIWoodwork === 'yes' || doIWoodwork === 'y') {
//     //console.log('That is correct!  I have been using power tools and working with wood since I was a kid.');
//     alert('That is correct!  I have been using power tools and working with wood since I was a kid.');
//     counter++;
//   } else if (doIWoodwork === 'no' || doIWoodwork === 'n') {
//     //console.log('That is incorrect.  I have been using power tools and working with wood since I was a kid.');
//     alert('That is incorrect.  I have been using power tools and working with wood since I was a kid.');
//   } else {
//     //console.log('Please enter a Yes or No for your answer');
//     alert('Please enter a Yes or No for your answer');
//   }
// }
// whatIDo();

alert(`Nice Job! You got ${counter} out of 5 correct so far.`);
alert('I will give you one for free...I am currently married.');

function yearsMarried() {
  let myMarriageLength = 20;
  //let marriageGuessCounter = 0; //Going to work on this later....
  let marriageGuesses = 3; // Working on this now! 12/13/21, glad it worked
  for (let guesses = 0; guesses < 4; guesses++) {
    let howLongHaveIBeenMarried = +prompt('How long do you think I have been married? (Enter number of years)');
    if (howLongHaveIBeenMarried < myMarriageLength) {
      alert(`That is too low.  You have ${marriageGuesses} guesses left.`);
      marriageGuesses--;
    } else if (howLongHaveIBeenMarried > myMarriageLength) {
      alert(`That is too high.  You have ${marriageGuesses} guessesleft.`);
      marriageGuesses--;
    } else if (howLongHaveIBeenMarried === myMarriageLength) {
      alert(`That is just right, and correct!  I have been married for ${myMarriageLength} years.`);
      counter++;
      break;
    } else {
      alert('Hmmmm not sure what happened here beep boop beep');
    }
    if (guesses === 3) {
      alert('Shucks, you ran out of guesses!  The correct answer is 20 years, OMG!');
    }
  }
}
yearsMarried();

alert('How about a question that has more than one right answer?');

//This next part drove me nuts. I think I tried to make it more complicated than it needed to be. Ryan was a huge help.
function myFavoriteFoods() {
  let favoriteFoods = ['pizza', 'empanadas', 'pho', 'tamales', 'cake'];
  let answeredCorrectly = false;
  let userGuesses = 0;
  while (userGuesses < 6 && !answeredCorrectly) {
    let foodGuess = prompt('So...other than Sushi, what do you think another one of my favorite foods could be?');
    for (let x = 0; x < favoriteFoods.length; x++) {
      if (favoriteFoods[x] === foodGuess) {
        let correctGuess = foodGuess;
        alert(`That is correct, ${correctGuess} is one of my favorite foods!   My favorite foods are ${favoriteFoods.slice(0, 3).join(', ')}, and ${favoriteFoods[4]}.`);
        answeredCorrectly = true;
        counter++;
      }
    }
    userGuesses++;
    if (userGuesses === 6) {
      alert(`Dang!  You ran out of guesses.  My favorite foods are ${favoriteFoods.slice(0, 3).join(', ')}, and ${favoriteFoods[4]}.`); // Made sense to stick with the theme and add an alert for this. Also changed the alert for this and the correct guess to include the array.  Messed around with.slice and .join to make the sentence read more like normal English.
    }
  }
}
myFavoriteFoods();
// let favoriteFoodsString = favoriteFoods.join(', ');
// alert(`Here is a full list of my favorite foods ${favoriteFoodsString}.`); // I did follow the assignment instructions and I did not add this function til after I already turned in Lab 03 (looks so much better now)  :)

// Below I coded 3 different options based on the user's score
if (counter <= 2) {
  alert(`Hmmmm, you can do better than that.  You scored ${counter} out of 7`);
} else if (counter > 2 && counter < 5) {
  alert(`Not bad.....  You scored ${counter} out of 7`);
} else if (counter >= 5) {
  alert(`Wow! Its like you already know me.  You scored ${counter} out of 7`);
}

alert('Ok, one last guessing game.  You have 3 tries only this time!');

let userNumGuess = 3;
function guessMyNumber() {
  let correctNumber = Math.floor(Math.random() * 10 + 1); //generates the random number
  //console.log(correctNumber); //console log it to make sure its working!
  for (let n = 0; n < 3; n++) {
    let numGuess = +prompt('I am thinking of a number between 1-10. What do you think it is?');
    if (numGuess === correctNumber) {
      alert(`Yes!  Excellent guess!  My number was ${correctNumber}`);
      break;
    } else if (numGuess !== correctNumber) {
      alert(`Hmmm, not quite, you have ${userNumGuess-1} guesses left.`);
      userNumGuess--;
    }
  }
  if (userNumGuess === 0) {
    alert(`You get an "A" for effort, but my number was actually ${correctNumber}`);
  }
}
guessMyNumber();

//The following two functions are used and called on the main HTML page.  Maybe there is a better way to write this? I assume there is since eslint is yelling at me about it.
// eslint-disable-next-line no-unused-vars
function goodbyeMessage() {
  alert(`Thanks again for visiting ${userName}!`);
}

// eslint-disable-next-line no-unused-vars
function highScore() {
  if (counter <= 2) {
    alert(`Hmmmm, you can do better than that.  You scored ${counter} out of 7`);
  } else if (counter > 2 && counter < 5) {
    alert(`Not bad.....  You scored ${counter} out of 7`);
  } else if (counter >= 5) {
    alert(`Wow! Its like you already know me.  You scored ${counter} out of 7`);
  }
}

