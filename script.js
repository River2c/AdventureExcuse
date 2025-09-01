import chalk from "chalk";
import promptSync from "prompt-sync";

const prompt = promptSync();

// Arrays for message components
const characters = ["My dog", "An alien", "A wizard", "A pirate", "My neighbor"];
const actions = ["ate my homework", "stole my spaceship", "cast a spell on my computer", "hid my treasure map", "tripped over a dragon"];
const consequences = ["so I couldn’t finish my homework.", "and now I’m late for school.", "so I lost the map to the treasure.", "and I need to fix it before tomorrow.", "which caused chaos in the neighborhood!"];
const locations = ["in the haunted forest", "on Mars", "at the park", "in the wizard’s tower", "under the bed"];

// Function to get a random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate a colored random message
function generateMessage() {
  console.log(
    chalk.cyan(getRandomElement(characters)) + " " +
    chalk.yellow(getRandomElement(actions)) + " " +
    chalk.green(getRandomElement(consequences)) + " " +
    chalk.magenta(getRandomElement(locations))
  );
}

// Ask user how many messages to generate
const numMessages = parseInt(prompt("How many messages do you want to generate? "));

// Generate the requested number of messages
for (let i = 0; i < numMessages; i++) {
  generateMessage();
}
