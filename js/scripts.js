// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, Text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().include(returner.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//UI LOGIC
$(document).ready(function() {
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const words = $("#texr-words").val(); 
    const wordCount = wordCounter(words);
  });
});
