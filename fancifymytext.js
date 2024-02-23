function biggerText() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold"; // Set font weight to bold
    if (document.getElementById("fancy").checked) {
      textInput.style.color = "blue"; // Set color to blue
      textInput.style.textDecoration = "underline"; // Underline the text
    }
}
  
  function removeStyles() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontFamily = ""; // Remove font family style
    textInput.style.color = ""; // Remove color style
    textInput.style.textDecoration = ""; // Remove the underline
  }