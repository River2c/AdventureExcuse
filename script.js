const characters = ["My dog", "An alien", "A wizard", "A pirate", "My neighbor"];
const actions = [
  "ate my homework",
  "stole my spaceship",
  "cast a spell on my computer",
  "hid my treasure map",
  "tripped over a dragon"
];
const consequences = [
  "so I couldn’t finish my homework.",
  "and now I’m late for school.",
  "so I lost the map to the treasure.",
  "and I need to fix it before tomorrow.",
  "which caused chaos in the neighborhood!"
];
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function generateMessage() {
    const message = `${getRandomElement(characters)} ${getRandomElement(actions)} ${getRandomElement(consequences)}`;
    console.log(message);
}

generateMessage();