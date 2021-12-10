'use strict';
console.log('Hello Sheyna and Amelia!');

alert('Please answer the following questions with a Yes or No');
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
alert('You got ' +counter+ ' out of 5 correct.');
let userName = prompt('Thank you for answering these questions.  What is your name?');
alert('Welcome to my site ' +userName+ '!');
//document.write('Welcome to my site ' +userName+ '!'); I don't like "document.write" There has to be a better way.

//The following two functions are used and called on the main HTML page.  Maybe there is a better way to write this?
// eslint-disable-next-line no-unused-vars
function goodbyeMessage() {
  alert('Thanks again for visiting ' +userName+ '!');
}

// eslint-disable-next-line no-unused-vars
function highScore(){
  alert('You scored ' +counter+ ' out of 5.');
}

