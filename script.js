const words = [];

function addWords() {
  let inputValue = document.getElementById("enteredWord").value;
  if (inputValue != "") {
  let liElement = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  liElement.appendChild(textNode)
  document.getElementById("wordsList").appendChild(liElement);
  words.push(inputValue);
  } else {
    alert("You must enter a word before click the 'Add word' button.")
  }
  document.getElementById("enteredWord").value = "";
}

function searchWord() {
  let searchValue = document.getElementById("searchedWord").value;
  let wordFounded = 0;
  for (let i = 0; i < words.length; ++i) {
    if (words[i] === searchValue) {
      alert("The word: "+ document.getElementById('searchedWord').value + " already exists in the dictionary.");
      wordFounded = 1;
    }
  }
  if (wordFounded === 0) {
    alert ("The word you searched for was not found!");
  }
  document.getElementById("searchedWord").value = "";
}