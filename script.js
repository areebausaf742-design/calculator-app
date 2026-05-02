let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = "Error";
  }
}

/* ⌨️ Keyboard support */
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") append(e.key);
  if (["+", "-", "*", "/", "."].includes(e.key)) append(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") display.value = display.value.slice(0, -1);
  if (e.key === "Escape") clearDisplay();
});