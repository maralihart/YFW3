// 1. Create a constant variable called answer that is assigned to a number of your choosing
const answer = 50;

// Bonus: Instead of 1, generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the user's guess
let guess = prompt('Enter your guess:');

// Convert the guess to a number
// All prompt() returns text (or string) which is not the same type as number so ("10" === 10 is false) aka ("10" is not equal to 10) or ("10 " !== 10 is true)
guess = Number(guess);

// Keep looping until the guess is correct
// While the guess is not the same as the answer
while (guess !== answer) {
  // Check if the guess is too high or too low and get new guess
  if (guess > answer) {
    guess = prompt('Try a lower number');
  } else {
    guess = prompt('Try a higher number');
  }

  // Convert the guess to a number
  guess = Number(guess);
}

// If the loop has exited, the guess must be correct
alert('Congratulations, you guessed the correct number!');
