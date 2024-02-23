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

  function makeMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(".") // Split the sentences
    alert(sentences)
    // Add -Moo at the end
    for (var i = 0; i < sentences.length; i++) {
        // Check if the sentence is a sentence or a blank
        alert(sentences[i].length);
        if (sentences[i].length > 0) { 
            sentences[i] = sentences[i] + "-Moo"
        }
    }
    // Join sentences with ". "
    text = sentences.join(".");
    // Uppercase the text
    textInput.value = text.toUpperCase();
  }