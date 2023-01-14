// Generate a random number between 1 and 100
const answer = Math.floor(Math.random() * 100) + 1;

// Get a reference to the form and the message element
const form = document.querySelector("form");
const message = document.querySelector("#message");

// BONUS: Reference the previous element
const previous = document.querySelector("#previous");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the user"s guess
  let guess = Number(form.guess.value);

  // BONUS: Create a list item element that will go into a list so user can see previous choices. Call it previousGuessEntry
  const previousGuessEntry = document.createElement("li");

  // Check if the guess is too high, too low, or correct ("Try lower", "Try higher", "You got it!")
  // Change the message.textContent to the appropriate message
  // BONUS: Change the previousGuessEntry.textContent to give information about guess

  if (guess > answer) {
    message.textContent = "Try a lower number.";
    previousGuessEntry.textContent = "It's lower than " + guess + ".";
  } else if (guess < answer) {
    message.textContent = "Try a higher number.";
    previousGuessEntry.textContent = "It's higher than " + guess + ".";
  } else {
    message.textContent = "Congratulations, you guessed the correct number: " + answer + "!";
    previousGuessEntry.textContent = "It was " + answer + "!";
  }

  // Append previousGuessEntry to previous to add the list item under the unordered list
  previous.append(previousGuessEntry);

});

// Additional practice
// Use functions to introduce rounds
// Have "lives" and display them on the webpage
// When you win, change the background to green and when you lose, change the background to red