let calculatorDisplay = document.getElementById("display");

// Menampilkan input ke layar
function toDisplay(value) {
  if (value === "X") {
    calculatorDisplay.value += "*";
  } else if (value === "%") {
    calculatorDisplay.value += "/100";
  } else {
    calculatorDisplay.value += value;
  }
}

// Menghapus seluruh display
function clearDisplay() {
  calculatorDisplay.value = "";
}

// Menghapus sat  u karakter terakhir
function deletePerNumber() {
  calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}

// Menampilkan hasil
function resultButton() {
  try {
    const result = math.evaluate(calculatorDisplay.value);
    calculatorDisplay.value = result;
  } catch (err) {
    calculatorDisplay.value = "Error";
  }
}
