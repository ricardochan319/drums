// Define a function to play a sound and apply the pressed style
function playSoundAndApplyStyle(className) {
  const soundFileName = getSoundFileName(className);
  if (soundFileName) {
    playSound(soundFileName);
    const button = document.querySelector(`.${className}`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 100); // Remove the .pressed class after 100 milliseconds (adjust as needed)
    }
  }
}

// Function to play a sound
function playSound(soundFile) {
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
}

// Function to handle button click events
function handleButtonClick() {
  const className = this.classList[0];
  playSoundAndApplyStyle(className);
}

// Function to handle keyboard events
function handleKeyPress(event) {
  const key = event.key.toLowerCase();
  const className = getButtonClassForKey(key);
  if (className) {
    playSoundAndApplyStyle(className);
  }
}

// Get the sound file name based on the button class
function getSoundFileName(className) {
  switch (className) {
    case "w":
      return "tom-1.mp3";
    case "a":
      return "tom-2.mp3";
    case "s":
      return "tom-3.mp3";
    case "d":
      return "tom-4.mp3";
    case "j":
      return "snare.mp3";
    case "k":
      return "crash.mp3";
    case "l":
      return "kick-bass.mp3";
    default:
      return null;
  }
}

// Get the button class for a given key
function getButtonClassForKey(key) {
  switch (key) {
    case "w":
      return "w";
    case "a":
      return "a";
    case "s":
      return "s";
    case "d":
      return "d";
    case "j":
      return "j";
    case "k":
      return "k";
    case "l":
      return "l";
    default:
      return null;
  }
}

// Select all buttons with the class "drum"
const buttons = document.querySelectorAll(".drum");

// Loop through each button and add the click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
});

// Add a keyboard event listener for key presses
document.addEventListener("keydown", handleKeyPress);
