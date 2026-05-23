console.log("Check if i am connected");

// Variables
const INITIAL_VALUE = 0;
let count = INITIAL_VALUE;

console.log(count);

// grab items or elements from your html
const counterValue = document.getElementById("counterValue");
const stepInput = document.getElementById("stepInput");
const hint = document.getElementById("hint");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Stretch goal: load any saved value in localstorage
const saved = localStorage.getItem("counterValue");

// conditional statemnt
if (saved !== null) {
  count = Number(saved);
}

// A resuable function that refreshes the screen
function render() {
  counterValue.textContent = count;
  localStorage.setItem("counterValue", count);
}

// red step values from inputs
function getStep() {
  const step = Number(stepInput.value);

  //   guard against empty or invalid input
  return step > 0 ? step : 1;
}

// button actions
increaseBtn.addEventListener("click", () => {
  count = count + getStep(); // addition
  hint.textContent = "";
  render();
});

decreaseBtn.addEventListener("click", () => {
  count = count - getStep(); // subtraction
  // Prevents us from counting down to values below zero
  if (count < 0) {
    count = 0;
    hint.textContent =
      "Can't go below zero! Because you're marking sessions and we cannot have negative sessions";
  } else {
    hint.textContent = "";
  }
  render();
});

resetBtn.addEventListener("click", () => {
  count = INITIAL_VALUE;
  hint.textContent = "";
  render();
});

render();
