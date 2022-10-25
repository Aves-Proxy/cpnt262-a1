/* store DOM elements in variables */
const button = document.querySelector("button");
const para = document.querySelector("p");
  
const fruit = ["apple", "banana", "mango", "pineapple"];
let tracker = 4; // For counting through the array and making sure prompts/text changes make sense

/* callback function for the event listener */
const eatFruit = () => {
  if (tracker > 0) {
    const rng = Math.floor(Math.random() * tracker); // generates a number between 0 and (tracker - 1)

    const eatenFruit = fruit[rng]; // pick a fruit from the array based on the RNG and track it for the prompt
    fruit.splice(rng, 1); // delete whatever fruit was selected from the array, you can't have your fruit and eat it too
    prompt(`You eat the ${eatenFruit}.`);
    para.innerHTML = `Remaining fruit: ${fruit.join(", ")}`; // change the paragraph to show what fruits are left.
  } else {
    para.innerHTML = `You have eaten all your fruit!`; // message displayed when all the fruit is gone/tracker hits 0
  }

  tracker--; //decrement the tracker each time so user isn't eating undefined
}

button.addEventListener("click", eatFruit)